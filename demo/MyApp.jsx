import React from 'react'
import { modalActions, modalReducer, ModalFramework } from '../src/index'

class MyApp extends React.Component {
  state = {
    modals: []
  }
  dispatch = action => {
    const newState = modalReducer(this.state, action)
    this.setState(newState)
  }
  render() {
    return (
      <div>
        <div className='modal-area'>
          <ModalFramework
            startingZIndex={100}
            modals = {this.state.modals}
            dispatch = {this.dispatch}
          />
        </div>
        <div className='no-modal-area'>
          <button 
            onClick={
              () => this.dispatch(
                modalActions.openModal(
                  console.log, // will console.log the auto generated modal id
                  { // custom config object to pass to the modal component
                    title: 'a modal!',
                    content: 'some messages',
                    closable: true
                  }
                )
              )
            }
          >
            Launch a modal
          </button>
          <button
            onClick={
              () => this.dispatch(
                modalActions.closeModal() // wont work yet but lets pick a random
              )
            }
          >
            Close a modal
          </button>
          <button
            onCLick={
              () => this.dispatch(
                modalActions.closeAllModals()
              )
            }
          >
            Close all modals
          </button>
        </div>
      </div>
    )
  }
}

export default MyApp
