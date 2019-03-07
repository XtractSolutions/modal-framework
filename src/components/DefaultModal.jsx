import React from 'react'

class DefaultModal extends React.PureComponent {
  // closeSelf was passed in my the framework and can be used to close
  // this instance of the modal
  closeHandler = () => this.props.closeSelf()
  render() {
    const {
      config = {},
      style = {},
      getModalRef = () => null,
      ...rest
    } = this.props
    const { title = '', content = '', closable = true } = config
    const { type = {} } = content
    return (
      <div
        id="default-modal"
        ref={getModalRef}
        style={style}
        className="modal-container"
      >
        <div className="list-component list-group">
          <div className="list-group-item active">
            <div className="header">
              <div className="corner-icons" />
              <h4 className="list-group-title">{title}</h4>
              <div className="corner-icons">
                {!closable ? null : (
                  <div className="close-button" onClick={this.closeHandler}>
                    &#10006;
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal-content">
            {// rather than simply placing content here, doing it this
            // way allows the modal to accept jsx content and pass down
            // the additional props available here (primarily closeSelf())
            content && typeof type === 'function' // this indicates jsx)
              ? React.cloneElement(content, { ...rest })
              : content}
          </div>
        </div>
      </div>
    )
  }
}

export default DefaultModal
