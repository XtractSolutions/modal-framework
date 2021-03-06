### Overview

When you open a modal you can give it a unique id as the first arg and then a configuration object 
(which matches the args we used to use) as the second. 
So this.props.openModal('some_unique_modal_name',{title: 'sometitle'....}). 
Then you can close it anywhere in the app by referring to that unique id with this.props.closeModal('some_unique_modal_name') 
OR, the component that is rendered directly within the modal (StandardModalContent for example) 
will be passed in this.props.closeSelf() which knows its own id... but that is only available at the top most level within the 
modal unless you specifically pass it further down within your modal "stack".

### To use modal framework:

1) Install the framework

```
npm install git+https://github.com/xtractsolutions/modal-framework --save
```

2) Load the <ModalFramework/> component at the heights level of the app where modals should be visible.

```
<div className='my app'>
   <ModalFramework
     coverOpacity={0.5}
     startingZIndex={100000}
     modals={this.props.modal}
     dispatch = {Store.dispatch}
   />
   <MyComponants>
</div>
```

and provide the following props

|prop name| required | default | comment|
|----|----|----|----|
|coverOpacity | no | 0.5 | opacity of the black screen cover behind the modal.|
|coverEnabled | no | true | should a screen cover be used behind the modal to prevent clicks|
|startingZIndex | no | 1,000,000 | the zIndex that will be applied to the screen cover. Each modal will use this zIndex + its index in the modals array|
|modals | yes | [] | Your applications state array of modals (might be state, redux, context, etc)|
|dispatch | yes | n/a | A function which accepts action objects and dispatches them to your reducers.|
|`child` | no | n/a | exactly one optional child component can be included. This component will provide the template for all modal windows.|
| tileConfig | no | n/a | an object with properties `vertical` and/or `horizontal` and pixel values that should be used to offset the location of each additional modal when multiple modals are opened (eg `{horizontal: '10px', vertical: '10px'}`)

3) Import actions to make them available within your application.
For redux:

```
import { modalActions } from 'modal-framework'
const rootActions = {
  ...modalActions
}

export default rootActions
```

4) Import reducers and tie them in with your application
For redux:
```
import { modalReducer } from 'modal-framework'

const rootReducer = combineReducers({
  modal: modalReducer,
})

export default rootReducer
```

5) (optional) create a default modal window component
```
import React from 'react'
import Store from '../../../store.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DefaultModal extends React.PureComponent {
  render() {
    const { config } = this.props
    const { title, closable, content } = config
    return (
      <div className="modal-container">
        <div className="list-component list-group">
          <div className="list-group-item active">
            <div className="header">
              <div className="corner-icons" />
              <h4 className="list-group-title">{title}</h4>
              <div className="corner-icons">
                {!closable ? null : (
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    onClick={this.props.closeSelf}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="modal-content">{React.cloneElement(content, { ...this.props })}</div>
        </div>
      </div>
    )
  }
}
export default DefaultModal

```
and pass the component to the ModalFramework
```
<div className='my app'>
   <ModalFramework
     coverOpacity={0.5}
     startingZIndex={100000}
     modals={this.props.modal}
     dispatch = {Store.dispatch}
   >
     <DefaultModal/>
   </ModalFramework>
   <MyComponants>
</div>
```
Props that will be passed into the child Modal component are:

|prop name|comment|
|----|----|
|closeSelf | a function that can be called to close the modal window|
|modalAddress | a string representing a unique id of the modal window|
|config | an object containing properties of your choosing|

### Modal framework actions

openModal(address, config)

|arg | comment|
|----|----|
|address | either, a unique string to use as the modal address (eg: my_modal_1) or a callback function which will recieve a unique string as an argument (eg (address) => this.setState({modalAddress: address}))|
|config | an object of your choosing to be passed into your modal dialog (eg: <br>{<br>  title: 'my modal', <br>  content: \<div>my message\</div>, <br>  closable: true<br>})|

closeModal(address)

|arg|comment|
|----|----|
|address|the unique string provided to or returned by the openModal function|

closeAllModals()
