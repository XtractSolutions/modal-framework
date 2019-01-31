import { isFunction, makeId } from '../utility/utility.js'

function modalReducer(state = [], action) {
  let address = null
  switch (action.type) {
    case 'open_modal':
      if (action.address && (typeof action.address === 'string' || action.address instanceof String)) {
        address = action.address
      } else {
        for (var i = 0; i < 10; i++) {
          // look for a uniuqe id
          address = makeId(10)
          if (state.find(modal => modal.address === address) === -1) {
            // we found an unused address
            break
          }
        }
        if (isFunction(action.address)) {
          action.address(address)
        }
      }
      const newModal = {
        address: address,
        config: { ...action.modalConfig }
      }
      return [
        ...state,
        newModal
      ]
    case 'close_modal':
      address = action.address
      if (address == null) {
        throw new Error('close modal action dispatched without required address property.')
      }
      return state.filter(modal => modal.address !== address)
    case 'close_all_modals':
      return []
    default:
      return state
  }
}

export default modalReducer

