// Manage the state (application properties)

// Initialize the state
let state = {
  appName: 'Multiplication tables',
  multiplicand: null,
  minMultiplicand: 1,
  maxMultiplicand: 12,
  minMultiplier: 1,
  maxMultiplier: 12
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