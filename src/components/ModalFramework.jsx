import React from 'react'
import PropTypes from 'prop-types'
import DefaultModal from './DefaultModal.jsx'
import { closeModal } from '../actions/modalActions'

class ModalFramework extends React.Component {
  getCoverRef = el => {
    this.coverRef = el
  }
  componentDidMount() {
    if (this.props.coverOpacity && this.coverRef) {
      this.coverRef.style.backgroundColor = `rgba(0,0,0,${
        this.props.coverOpacity
      }`
    }
  }
  modalRenderer = (modal, idx) => {
    if (React.Children.count(this.props.children) === 1) {
      return (
        React.cloneElement(
          this.props.children,
          {
            key: modal.address,
            style: { zIndex: this.props.startingZIndex + idx + 1 },
            modalAddress: modal.address,
            config: modal.config,
            closeSelf: () => this.props.dispatch(closeModal(modal.address))
          }
        )
      )
    } else {
      return (
        <DefaultModal
          key={modal.address}
          style= {{ zIndex: this.props.startingZIndex + idx + 1 }}
          content={modal.config.content || null}
          title={modal.config.title || ''}
          closable={modal.config.closable || true}
          coverOpacity={modal.config.coverOpacity || 0}
          closeSelf= { () => this.props.dispatch(closeModal(modal.address)) }
        />
      )
    }
  }
  render() {
    if (this.props.coverEnabled && this.props.modals && this.props.modals.length >= 1) {
      return (
        <div id="modal-framework-default" ref={this.getCoverRef} className="modal-screen-cover" style={{ zIndex: this.props.startingZIndex }}>
          {
            this.props.modals.map((modal, idx) => this.modalRenderer(modal, idx))
          }
        </div>
      )
    } else {
      return null
    }
  }
}

export default ModalFramework

ModalFramework.propTypes = {
  children: PropTypes.object,
  modals: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  startingZIndex: PropTypes.number,
  coverOpacity: PropTypes.number,
  coverEnabled: PropTypes.bool
}

ModalFramework.defaultProps = {
  startingZIndex: 1000000,
  coverOpacity: 0.5,
  coverEnabled: true
}
