import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DefaultModal extends React.PureComponent {
  getModalRef = el => {
    this.tipModalContainer = el
  }
  handler = () => {
    if (this.tipModalContainer) {
      this.tipModalContainer.classList.remove('bounceInDown')
      this.tipModalContainer.classList.add('bounceOutUp')
      this.timer = setTimeout(() => {
        this.props.closeSelf()
      }, 750)
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
    const { title, closable, content, style } = this.props
    return (
      <div
        ref={this.getModalRef}
        style = { style }
        className="modal-container animated bounceInDown"
      >
        <div className="list-component list-group">
          <div className="list-group-item active">
            <div className="header">
              <div className="corner-icons"/>
              <h4 className="list-group-title">{title}</h4>
              <div className="corner-icons">
                {!closable ? null : (
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    onClick={this.handler}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="modal-content">{content}</div>
        </div>
      </div>
    )
  }
}

DefaultModal.propTypes = {
  // Title to display in header
  title: PropTypes.string.isRequired,
  // Should the close X be in the header
  closable: PropTypes.bool.isRequired,
  // The content to display in the modal body
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default DefaultModal
