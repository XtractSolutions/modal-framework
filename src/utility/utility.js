// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
export function makeId(length = 5) {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export function makeUniqueId(length = 5, state = []) {
  for (var i = 0; i < 10; i++) {
    // look for a uniuqe id
    const address = makeId(length)
    if (state.find(modal => modal.address === address) === undefined) {
      // we found an unused address
      return address
    }
  }
  throw new Error('Unable to generate unique address. To many modals open.')
}

// https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}
