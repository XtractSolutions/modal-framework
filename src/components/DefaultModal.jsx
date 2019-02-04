import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    onClick={this.closeHandler}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="modal-content">
            {// rather than simply placing content here, doing it this
            // way allows the modal to accept jsx content and pass down
            // the additional props available here (primarily closeSelf())
            content &&
            (typeof content === 'string' || content instanceof String)
              ? content
              : React.cloneElement(content, { ...rest })}
          </div>
        </div>
      </div>
    )
  }
}

export default DefaultModal
