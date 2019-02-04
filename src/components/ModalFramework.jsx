import React from 'react'
import PropTypes from 'prop-types'
import DefaultModal from './DefaultModal.jsx'
import { closeModal } from '../actions/modalActions'

class ModalFramework extends React.Component {
  modalRenderer = (modal, idx) => {
    const tile = {}
    const { tileConfig = {} } = this.props
    if (tileConfig.horizontal) {
      const pixWidth = tileConfig.horizontal.replace('px', '')
      tile.left = modal.stackPosition * pixWidth + 'px'
    }
    if (tileConfig.vertical) {
      const pixWidth = tileConfig.vertical.replace('px', '')
      tile.top = modal.stackPosition * pixWidth + 'px'
    }
    if (React.Children.count(this.props.children) === 1) {
      return React.cloneElement(this.props.children, {
        key: modal.address,
        style: { zIndex: this.props.startingZIndex + idx + 1, ...tile },
        modalAddress: modal.address,
        config: modal.config,
        closeSelf: () => this.props.dispatch(closeModal(modal.address))
      })
    } else {
      return (
        <DefaultModal
          key={modal.address}
          style={{ zIndex: this.props.startingZIndex + idx + 1, ...tile }}
          config={modal.config}
          modalAddress={modal.adddress}
          closeSelf={() => this.props.dispatch(closeModal(modal.address))}
        />
      )
    }
  }
  render() {
    if (
      this.props.coverEnabled &&
      this.props.modals &&
      this.props.modals.length >= 1
    ) {
      return (
        <div
          id="modal-framework-default"
          className="modal-screen-cover"
          style={{
            zIndex: this.props.startingZIndex,
            backgroundColor: `rgba(0,0,0,${this.props.coverOpacity})`
          }}
        >
          {this.props.modals.map((modal, idx) =>
            this.modalRenderer(modal, idx)
          )}
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
  coverEnabled: PropTypes.bool,
  tileConfig: PropTypes.object
}

ModalFramework.defaultProps = {
  startingZIndex: 1000000,
  coverOpacity: 0.5,
  coverEnabled: true
}
