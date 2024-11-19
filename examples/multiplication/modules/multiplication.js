import { getState, setState, getStateProperty, setStateProperty } from './state.js'
import { log } from '../../../modules/log.js'

const urlEncodedMultiplicationSign = '%C3%97'
const urlEncodedSpace = '+'
const urlEncodedNoBreakSpace = '%C2%A0'
const urlEncodedEqualsSign = '%3D'
const urlEncodedEnDash = '%E2%80%93'

const lineSeparator = '/'
const pageSeparator = '//'

function init () {
  setStateFromURLParams ()
  const state = getState()
  if (state.multiplicand) {
    showTableBigAs(state.multiplicand, state.minMultiplier, state.maxMultiplier, state.interval)
  } else {
    showListofTables()
  }
}

function showListofTables () {
  const state = getState()
  let heading = document.createElement('h1')
  let tables = document.createElement('div')
  tables.classList.add('tables')
  for (let multiplicand = state.minMultiplicand; multiplicand <= state.maxMultiplicand; multiplicand++) {
    let table = document.createElement('div')
    table.dataset.multiplicand = multiplicand
    table.dataset.minMultiplier = state.minMultiplier
    table.dataset.maxMultiplier = state.maxMultiplier
    table.classList.add('table')
    // \u{00D7} is a multiplication sign
    // \u{2026} is a horizontal ellipsis
    table.textContent = multiplicand + ' \u{00D7} ' + state.minMultiplier + ' \u{2026} ' + state.maxMultiplier
    table.addEventListener('click', (event) => {
      showTableBigAs (table.dataset.multiplicand, table.dataset.minMultiplier, table.dataset.maxMultiplier, state.interval)
    })
    tables.appendChild(table)
  }
  heading.textContent = state.appName
  document.body.appendChild(heading)
  if (state.interval > 0) {
    let behavior = document.createElement('p')
    let units = state.interval == 1 ? 'second' : 'seconds'
    behavior.textContent = 'Automatic page flip every ' + state.interval + ' ' + units
    document.body.appendChild(behavior)
  }
  document.body.appendChild(tables)
}

function showTableBigAs (multiplicand, minMultiplier, maxMultiplier, interval) {
  var problemText
  var solutionText
  var horizontalRule
  var result
  var queryString = ''
  if (interval > 0) {
    queryString = 'interval=' + interval + '&'
  }
  queryString += 'title=' + multiplicand + '+' + urlEncodedMultiplicationSign + '+multiplication+table&background=royalblue&backBackground=darkgreen&textAlign=right&wordPerLineInPortrait=true&text='
  for (let multiplier = minMultiplier; multiplier <= maxMultiplier; multiplier++) {
    problemText = multiplicand + urlEncodedSpace + urlEncodedMultiplicationSign + urlEncodedNoBreakSpace + multiplier
    // Build a horizontal rule from en dashes
    horizontalRule = urlEncodedEnDash.repeat(multiplicand.toString().length + 2)
    result = multiplicand * multiplier
    solutionText = problemText + '[p:' + lineSeparator + horizontalRule + '][l:+' + urlEncodedEqualsSign + ']+' + result
    queryString += problemText + pageSeparator + solutionText
    if (multiplier < maxMultiplier) {
      queryString += pageSeparator
    }
  }
  window.location.href = '../../?' + queryString
}

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
}

export { init }