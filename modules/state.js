// Manage the state (application properties)

// Initialize the state
let state = {
  appName: 'Big As',
  background: '#000000',
  currentPage: 1,
  fontStyle: 'normal',
  googleFont: null,
  height: null,
  fontWeight: '400',
  height: '100%',
  lineHeight: 16,
  margin: null,
  text: 'Big As/Possible',
  textAlign: 'center',
  textFill: null,
  textStroke: null,
  textStrokeWidth: null,
  title: 'Big As',
  trimBottom: 0,
  trimTop: 0,
  width: null
}

// Return the state object
function getState () {
  return state
}

// Return the state property
function getStateProperty(key) {
  return state[key]
}


// Update the state
function setState (newState) {
  // Append properties of the new state to the old state,
  // potentially overwriting existing properties of the old state
  state = { ...state, ...newState }
  return state
}

// Update the state property
function setStateProperty (key, value) {
  state[key] = value
}


// Export the getState and setState functions
export { getState, setState, getStateProperty, setStateProperty }