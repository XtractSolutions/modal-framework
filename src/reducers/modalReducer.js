import { isFunction, makeUniqueId } from '../utility/utility.js'

function modalReducer(state = [], action = {}) {
  let address = null
  switch (action.type) {
    case 'open_modal':
      if (
        action.address &&
        (typeof action.address === 'string' || action.address instanceof String)
      ) {
        address = action.address
      } else {
        address = makeUniqueId(10, state)
        if (isFunction(action.address)) {
          action.address(address)
        }
      }
      // this modals position should be the maximum modals position + 1
      const maxStackPosition = Math.max.apply(
        Math,
        state.map(modal => {
          return modal.stackPosition
        })
      )
      const thisStackPosition =
        maxStackPosition === -1 * Infinity ? 1 : maxStackPosition + 1

      // if we are updating a named modal we need to find it
      const modal = state.find(modal => modal.address === address)

      // see if we have a named modal that already exists in which case
      // we just need to update its config but nothing else.
      const newModal =
        modal === undefined
          ? {
              address: address,
              config: { ...action.modalConfig },
              stackPosition: thisStackPosition
            }
          : {
              ...modal,
              config: {
                ...modal.config,
                ...action.modalConfig
              }
            }

      // new state need to removed the existing modal (if present) before
      // adding the udpated version
      const newState =
        modal === undefined
          ? state
          : state.filter(modal => modal.address !== newModal.address)

      return [...newState, newModal]
    case 'close_modal':
      address = action.address
      if (address == null) {
        throw new Error(
          'close modal action dispatched without required address property.'
        )
      }
      return state.filter(modal => modal.address !== address)
    case 'close_all_modals':
      return []
    default:
      return state
  }
}

export default modalReducer
