import { getState, setState, getStateProperty, setStateProperty } from './modules/state.js'
import { log } from './modules/log.js'

const pageSeparator = '//'
const lineSeparator = '/'
const urlWebFontLoader = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js'

// Set state properties from parameters in the URL query string
function setStateFromURLParams () {
  const urlParams = new URLSearchParams(window.location.search)
  const state = getState()
  const newState = {}
  // Iterate over URL parameters
  for (const [key, value] of urlParams) {
    // If the URL parameter name matches a state property, set the state property
    if (Object.hasOwn(state, key)) {
      // Coerce the URL parameter value (string or null) to the correct type, based on the type of the existing state property
      switch (typeof state[key]) {
        case 'boolean':
          // If the state property is a Boolean, then just the parameter name (without a value) means true
          switch (value.toLowerCase()) {
            case '':
            case 'true':
              newState[key] = true
              break
            case 'false':
              newState[key] = false
              break
            default:
              log.warn('Bad value ignored for URL query string parameter: ' + key + '=' + value + '. Value must be true or false.\nTip: Specifying ' + key + ' (the parameter name by itself, with no trailing equal sign or value) has the same effect as ' + key + '=true.')
          }
          break
        case 'string':
        case 'object':
          newState[key] = value
          break
        case 'number':
          newState[key] = Number(value)
          break
      }
    } else {
      log.warn('Unrecognized parameter in URL query string: ' + key)
    }
  }
  setState(newState)
  if (getStateProperty('reverse') === true) {
    setStateProperty('currentPage', getStatePages())
  }
  if (getStateProperty('random') === true) {
    setStateProperty('currentPage', getRandomPageNumber())
  }
}

function formatSVGElementById (svgElementId) {
  const state = getState()
  const svgElement = document.getElementById(svgElementId)
  // If a Google Font is specified, synchronously load the Web Font Loader script
  if (state.googleFont) {
 	  loadExternalScript(urlWebFontLoader)
	}
  window.addEventListener('load', () => {
    insertText(svgElement)
    if (getStateProperty('infoButton') === true) {
      // Show the info button
      document.getElementById('info').style.visibility = 'visible'
    }
  })
  
  // Handle keyboard events
  
  window.addEventListener('keyup', (event) => {
    const keyHandler = {
      'Enter': nextPage,
      'ArrowRight': nextPage,
      'ArrowDown': nextPage,
      'PageDown': nextPage,
      'ArrowUp': prevPage,
      'ArrowLeft': prevPage,
      'ArrowUp': prevPage,
      'PageUp': prevPage,
      ' ': togglePause
    }[event.key]
    keyHandler?.(svgElement)
    // If unmodified (no Alt or Ctrl) key pressed
    if (!event.ctrlKey && !event.altKey) {
      switch (event.key) {
        case 'c':
          copyPrettifiedQueryStringToClipboard()
          break
        case 'v':
          pastePrettifiedQueryStringToURL()
          break
      }
    }
  })
  
  // Handle touch events
  
  let touchstartX = 0
  let touchstartY = 0
  let touchendX = 0
  let touchendY = 0
  
  svgElement.parentElement.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX
    touchstartY = event.changedTouches[0].screenY
  }, {passive: true})

  svgElement.parentElement.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX
    touchendY = event.changedTouches[0].screenY
    handleTouchGesture(svgElement)
  }, {passive: true})

  function handleTouchGesture (svgElement) {
    if (touchendX < touchstartX) {
      nextPage(svgElement)
    }
    if (touchendX > touchstartX) {
      prevPage(svgElement)
    }
    if (touchendX == touchstartX) {
      togglePause(svgElement)
    }
  }
  
  // Handle mouse events
  
  let mousedownX = 0
  let mousedownY = 0
  let mouseupX = 0
  let mouseupY = 0

  svgElement.parentElement.addEventListener('mousedown', function(event) {
    mousedownX = event.screenX
    mousedownY = event.screenY
  })

  svgElement.parentElement.addEventListener('mouseup', function(event) {
    mouseupX = event.screenX
    mouseupY = event.screenY
    handleMouseGesture(svgElement)
  })

  function handleMouseGesture (svgElement) {
    if (mouseupX < mousedownX) {
      nextPage(svgElement)
    }
    if (mouseupX > mousedownX) {
      prevPage(svgElement)
    }
    if (mouseupX == mousedownX) {
      togglePause(svgElement)
    }
  }

}

// Toggle between pause and automatic page flipping
// (only relevant if interval parameter is greater than 0)
function togglePause (svgElement) {
  const state = getState()
  if (state.interval > 0) {
    if (state.paused) {
      // Restart automatic page flipping
      let intervalID = setInterval(nextPage, state.interval * 1000, svgElement)
      svgElement.style.transition = 'none'
      svgElement.classList.add('show')
      svgElement.classList.remove('dim')
      setStateProperty('_intervalID', intervalID)
      setStateProperty('paused', false)
    } else {
      // Pause automatic page flipping
      clearInterval(state._intervalID)
      setStateProperty('_intervalID', null)
      setStateProperty('paused', true)
      setPauseStyle(svgElement)
    }
  }
}

function setPauseStyle (svgElement) {
  const state = getState()
  svgElement.style.transition = 'opacity ' + state.fadeIn + 's'
  svgElement.classList.add('dim')
  svgElement.classList.remove('show')
}

function nextPage (svgElement) {
  var newPage
  const state = getState()
  if (state.random) {
    newPage = getRandomPageNumber()
  } else {
    if (state.reverse) {
      newPage = getDecrementedPageNumber()
    } else {
      newPage = getIncrementedPageNumber()
    }
  }
  setStateProperty('currentPage', newPage)
  insertText(svgElement)
}

function prevPage (svgElement) {
  var newPage
  const state = getState()
  if (state.random) {
    newPage = getRandomPageNumber()
  } else {
    if (state.reverse) {
      newPage = getIncrementedPageNumber()
    } else {
      newPage = getDecrementedPageNumber()
    }
  }
  setStateProperty('currentPage', newPage)
  insertText(svgElement)
}

function getIncrementedPageNumber () {
  var newPage
  const currentPage = getStateProperty('currentPage')
  const pages = getStatePages()
  if (currentPage < pages) {
    newPage = currentPage + 1
  } else {
    // If we're already at the last page, wrap around to the first page
    newPage = 1
  }
  return newPage
}

function getDecrementedPageNumber () {
  var newPage
  const currentPage = getStateProperty('currentPage')
  if (currentPage > 1) {
    newPage = currentPage - 1
  } else {
    // If we're already at the first page, wrap around to the last page
    newPage = getStatePages()
  }
  return newPage
}

function formatSVGElementsByClassName (className) {
  ;[...document.getElementsByClassName(className)].forEach(element => {
    window.addEventListener('load', () => {insertText(element)} )
  })
}

function loadExternalScript (src) {
  var scriptElement = document.createElement('script')
  scriptElement.defer = true
  scriptElement.src = src
  document.getElementsByTagName('head')[0].appendChild(scriptElement)
}

function styleText (svgElement) {
  const state = getState()
  if (state.googleFont) svgElement.style.fontFamily = state.googleFont
  if (state.fontWeight) svgElement.style.fontWeight = state.fontWeight
  if (state.fontStyle) svgElement.style.fontStyle = state.fontStyle
  if (state.margin) svgElement.style.margin = state.margin
  if (state.width) svgElement.style.width = state.width
  if (state.height) svgElement.style.height = state.height
  // Apply background to parent (container) element
  if (state.background) svgElement.parentElement.style.background = state.background
  // Apply text styles
  for (const text of svgElement.children) {
    if (state.textFill) text.style.fill = state.textFill
    if (state.textStroke) text.style.stroke = state.textStroke
    if (state.textStrokeWidth) text.style.strokeWidth = state.textStrokeWidth
  }
  // Center text
  if (state.textAlign == 'center') {
    var maxTextWidth = 0
    var thisTextWidth = 0
    // Get width of widest line
    for (const text of svgElement.children) {
      thisTextWidth = text.getBBox().width
      if (thisTextWidth > maxTextWidth) {
        maxTextWidth = thisTextWidth
      }
    }
    // Shift narrower lines right, centering them relative to the widest line
    for (const text of svgElement.children) {
      thisTextWidth = text.getBBox().width
      if (thisTextWidth < maxTextWidth) {
        text.setAttribute('dx', (maxTextWidth - thisTextWidth) / 2)
      }
    }
  }
  fitSVGViewBoxToBBox (svgElement)
  // Make SVG element visible
  if (state.fadeIn > 0) {
    svgElement.style.transition = 'opacity ' + state.fadeIn + 's'
  }
  svgElement.classList.add('show')
  svgElement.classList.remove('hide')
  // If this is the initial page, then start the interval timer.
  // Delay starting the timer until the initial page has faded-in,
  // otherwise the first interval seems too short.
  // fadeIn is in seconds, setInterval delay is in milliseconds.
  if (state._initialPage) {
    if (state.interval > 0) {
      if (state.paused) {
        setPauseStyle (svgElement)
      } else {
        setTimeout(() => {
          let intervalID = setInterval(nextPage, state.interval * 1000, svgElement)
          setStateProperty('_intervalID', intervalID)
        }, state.fadeIn * 1000)
      }
    }
    setStateProperty('_initialPage', false)
  }
}

// Shrinkwrap the SVG viewBox to the bounding box of its contents
function fitSVGViewBoxToBBox (svgElement) {
  // Remove old viewBox (if you don't, it affects the bounding box calculation)
  svgElement.removeAttribute('viewBox')
  const state = getState()
  const bbox = svgElement.getBBox()
  const viewBox = {}
  // Initialize viewBox from bounding box
  viewBox.x = bbox.x
  viewBox.y = bbox.y
  viewBox.width = bbox.width
  viewBox.height = bbox.height
  // Set viewBox height to 1 unit larger than bounding box, to avoid cropping
  viewBox.height += 1
  // Apply trim parameters
  viewBox.y += state.trimTop
  viewBox.height -= state.trimTop + state.trimBottom
  svgElement.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`)
}

function insertText (svgElement) {
  const svgNS = 'http://www.w3.org/2000/svg'
  const state = getState()
  var text
  // If the SVG element specifies text in its own data-text attribute, use it
	if (svgElement.dataset.text) {
	  text = svgElement.dataset.text
  } else {
    // Otherwise, get the current page of text from the state text property
    text = state.text.split(pageSeparator)[state.currentPage - 1]
  }
  // Split text into lines
  var dy = 0
  // Hide SVG element
  if (state.fadeIn > 0) {
    svgElement.style.transition = 'none'
  }
  svgElement.classList.add('hide')
  svgElement.classList.remove('show')
  // Remove any existing child elements from the SVG element
  svgElement.querySelectorAll('*').forEach(child => child.remove())
  text.split(lineSeparator).forEach(function (line) {
    // Put each line of text into its own SVG <text> element
    let svgText = document.createElementNS(svgNS, 'text')
    if (dy > 0) {
      svgText.setAttribute('dy', dy)
    }
    // Unescape any character references in the line
    svgElement.appendChild(svgText).textContent = convertCharRefsToChars(line)
    dy += state.lineHeight
  })
  if (state.googleFont) {
    // Wait until Google Font is active before styling text
    WebFont.load({
      google: {
        families: [state.googleFont + ':' + state.fontWeight]
      },
      fontactive: () => { styleText(svgElement) }
    })
  } else {
    styleText(svgElement)
  }
}

// In the input string, convert decimal character references (such as &#9884;) to actual characters
function convertCharRefsToChars (str) {
  var regex = /&#(\d+);/g
  var result
  result = str.replace(regex, function (_ , $1) {
    return String.fromCharCode($1)
  })
  regex = /&#x([A-Fa-f0-9]+);/g
  result = result.replace(regex, function (_ , $1) {
    return String.fromCharCode(Number('0x' + $1))
  })
  return result
}

function getRandomPageNumber () {
  const state = getState()
  const min = 1
  const max = getStatePages()
  const random = Math.floor((Math.random() * max) + min)
  return random
}

function getStatePages () {
  return getStateProperty('text').split(pageSeparator).length // Number of pages
}

async function copyPrettifiedQueryStringToClipboard () {
  const text = getPrettifiedQueryString()
  await navigator.clipboard.writeText(text)
}

function getPrettifiedQueryString () {
  // Trim leading ? from search property (it's not part of the query string)
  const queryString = window.location.search.substring(1)
  // Insert newline after each page break, line break, and parameter separator (&)
  const prettifiedQueryString = queryString.replace(/\/(\/)?|\&/g, '$&\n')
  return prettifiedQueryString
}

// Use contents of Clipboard to set the query string; triggers a page load
function pastePrettifiedQueryStringToURL () {
  navigator.clipboard
    .readText()
    .then((clipText) => {
      // The pasted text shouldn't start with a question mark, but if it does, remove it
      if (clipText[0] === '?') {
        clipText = clipText.substring(1)
      }
      window.location.search = '?' + clipText.replace(/(?:\r\n|\r|\n)/g, '')
    })
}

export { formatSVGElementById, formatSVGElementsByClassName, setStateFromURLParams }