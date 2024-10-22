import { getState } from './state.js'

const log = {}

log.info = function (message) {
  consoleMessage('info', message)
}

log.warn = function (message) {
  consoleMessage('warn', message)
}

log.error = function (message) {
  consoleMessage('error', message)
}

function consoleMessage (messageType, message) {
  const appName = getState().appName
  console[messageType](appName + ': ' + message)
}

export { log }