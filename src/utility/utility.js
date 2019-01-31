// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
export function makeId(length = 5) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

// https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
export function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}
