import React from 'react'

class ExampleModalContent extends React.Component {
  closeMe = () => {
    // the closeSelfProp was automatically passed down to the modal content
    this.props.closeSelf()
  }
  render() {
    return (
      <div>
        {'your modal content can also include jsx like this...'}
        <div>
          <button
            onClick={this.closeMe}
            style={{
              padding: '10px',
              backgroundColor: 'red',
              borderRadius: '10px',
              fontWeight: 'bold',
              marginTop: '20px'
            }}
          >
            close me!
          </button>
        </div>
      </div>
    )
  }
}

export default ExampleModalContent
