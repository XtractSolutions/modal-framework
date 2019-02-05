import './MyApp.styl'
import React from 'react'
import ExampleModalContent from './ExampleModalContent.jsx'
import { modalActions, modalReducer, ModalFramework } from '../src/index'

class MyApp extends React.Component {
  static possibleHeaders = [
    "I'm a modal!",
    'This is important!',
    'Serious business here.',
    'Just so you know'
  ]
  static possibleContent = [
    'This is a modal window. You can use this default window with some custom styling or create your own!',
    'If you want to have modals with different levels of priority, just include multiple instance of modal framework with different startingZIndex values. Send high priority modals to the highst z-index framework.',
    <ExampleModalContent />
  ]
  state = {
    modals: [] // this might be in redux
  }
  dispatch = action => {
    const newState = modalReducer(this.state.modals, action)
    this.setState({ modals: newState })
  }
  randomItem = inputArray => {
    return inputArray[Math.floor(Math.random() * inputArray.length)]
  }
  makeRandomModalConfig = () => {
    return {
      // custom config object to pass to the modal component
      title: this.randomItem(MyApp.possibleHeaders),
      content: this.randomItem(MyApp.possibleContent),
      closable: true
    }
  }
  getRandomOpenModal = () => {
    const randomModal = this.randomItem(this.state.modals)
    return randomModal.address
  }
  render() {
    return (
      <React.Fragment>
        <div className="modal-area">
          <ModalFramework
            tileConfig={{ horizontal: '10px', vertical: '10px' }}
            startingZIndex={100}
            modals={this.state.modals}
            dispatch={this.dispatch}
            coverEnabled={false}
            coverOpacity={0.5}
          />
        </div>
        <div className="no-modal-area">
          <button
            onClick={() =>
              this.dispatch(
                modalActions.openModal(
                  console.log, // will console.log the auto generated modal id
                  this.makeRandomModalConfig()
                )
              )
            }
          >
            Launch a modal
          </button>
          <button
            onClick={() =>
              this.dispatch(
                modalActions.openModal(
                  'named_modal', // will console.log the auto generated modal id
                  { ...this.makeRandomModalConfig(), title: 'Named modal' }
                )
              )
            }
          >
            open/replace named modal
          </button>
          <button
            onClick={() =>
              this.dispatch(
                modalActions.closeModal(this.getRandomOpenModal()) // wont work yet but lets pick a random
              )
            }
          >
            Close a random modal
          </button>
          <button onClick={() => this.dispatch(modalActions.closeAllModals())}>
            Close all modals
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default MyApp
