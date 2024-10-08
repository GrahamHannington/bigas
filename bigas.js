const urlWebFontLoader = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js'

// Get parameters from URL and set default values
function getParamsFromURL () {
  const urlParams = new URLSearchParams(window.location.search)
  var params = {}
  params.text = urlParams.get('text') || 'Big As/Possible'
  params.textFill = urlParams.get('textFill') || '#FFFFFF'
  params.backgroundColor = urlParams.get('backgroundColor') || '#000000'
  params.fontWeight = urlParams.get('fontWeight') || 'normal'
  params.fontStyle = urlParams.get('fontStyle') || 'normal'
  params.fontWeight = urlParams.get('fontWeight') || '400'
  params.googleFont = urlParams.get('googleFont')
  params.textAlign = urlParams.get('textAlign') || 'center' // left
  params.lineHeight = urlParams.get('lineHeight')
  params.margin = urlParams.get('margin') || '2vh'
  params.width = urlParams.get('width') || '100%'
  params.height = urlParams.get('height') || '100%'
  return params
}

function formatSVGElementById (svgElementId, useURLParms) {
  const svgElement = document.getElementById(svgElementId)
  var params = {}
  if (useURLParms) {
	params = getParamsFromURL()
	// If a Google Font is specified, synchronously load the Web Font Loader script
	if (params.googleFont) {
	  loadExternalScript(urlWebFontLoader)
	}
  } else {
    params.text = svg.dataset.text
  }
  window.addEventListener('load', () => {insertText(svgElement, params)})
}

function formatSVGElementsByClassName (className) {
  ;[...document.getElementsByClassName(className)].forEach(element => {
    let params = {}
    params.text = element.dataset.text
    window.addEventListener('load', () => {insertText(element, params)} )
  })
}

function loadExternalScript (src) {
  var scriptElement = document.createElement('script')
  scriptElement.defer = true
  scriptElement.src = src
  document.getElementsByTagName('head')[0].appendChild(scriptElement)
}

function styleText (svgElement, params) {
  params.textAlign ??= 'center'
  if (params.googleFont) svgElement.style.fontFamily = params.googleFont
  if (params.fontWeight) svgElement.style.fontWeight = params.fontWeight
  if (params.fontStyle) svgElement.style.fontStyle = params.fontStyle
  if (params.margin) svgElement.style.margin = params.margin
  if (params.width) svgElement.style.width = params.width
  if (params.height) svgElement.style.height = params.height
  if (params.textAlign == 'center') {
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
      if (params.textFill) text.style.fill = params.textFill
      thisTextWidth = text.getBBox().width
      if (thisTextWidth < maxTextWidth) {
        text.setAttribute('dx', (maxTextWidth - thisTextWidth) / 2)
      }
    }
  }
  // Shrinkwrap the SVG viewBox to the bounding box of its contents
  const bbox = svgElement.getBBox()
  // Set height to 1 unit larger than bounding box, to avoid cropping
  const height = bbox.height + 1
  svgElement.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${height}`)
  // Make SVG element visible
  svgElement.style.visibility = 'visible'
}

function insertText (svgElement, params) {
  const svgNS = 'http://www.w3.org/2000/svg'
  const lineHeight = parseInt(params.lineHeight || '16')
  // Split text into lines
  var dy = 0
  params.text.split('/').forEach(function (line) {
    // Put each line of text into its own SVG <text> element
    let svgText = document.createElementNS(svgNS, 'text')
    if (dy > 0) {
      svgText.setAttribute('dy', dy)
    }
    svgElement.appendChild(svgText).textContent = line
    dy += lineHeight
  })
  document.body.style.backgroundColor = params.backgroundColor
  if (params.googleFont) {
    // Wait until Google Font is active before styling text
    WebFont.load({
      google: {
        families: [params.googleFont + ':' + params.fontWeight]
      },
      fontactive: () => { styleText(svgElement, params) }
    })
  } else {
    styleText(svgElement, params)
  }
}

export { formatSVGElementById, formatSVGElementsByClassName }