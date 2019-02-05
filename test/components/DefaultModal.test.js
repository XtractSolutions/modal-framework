import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import DefaultModal from '../../src/components/DefaultModal.jsx'

describe('DefaultModal component', () => {
  it('Should render default modal window with close icon', () => {
    const props = {
      startingZIndex: 100,
      dispatch: () => null
    }
    const modal = {
      address: 'abc123',
      config: {
        title: 'test title',
        content: 'test content',
        closable: true
      }
    }
    const idx = 1
    const tile = { top: '0px', left: '0px' }
    const wrapper = mount(
      <DefaultModal
        style={{ zIndex: props.startingZIndex + idx, ...tile }}
        config={modal.config}
        modalAddress={modal.adddress}
        closeSelf={() => null}
      />
    )
    expect(
      wrapper.containsAllMatchingElements([
        <div
          id="default-modal"
          style={{ zIndex: 101, top: '0px', left: '0px' }}
          className="modal-container"
        >
          <div className="list-component list-group">
            <div className="list-group-item active">
              <div className="header">
                <div className="corner-icons" />
                <h4 className="list-group-title">{'test title'}</h4>
                <div className="corner-icons">
                  <div className="close-button">&#10006;</div>
                </div>
              </div>
            </div>
            <div className="modal-content">{'test content'}</div>
          </div>
        </div>
      ])
    ).to.equal(true)
  })
  it('Should render default modal window without close icon tiled', () => {
    const props = {
      startingZIndex: 100,
      dispatch: () => null
    }
    const modal = {
      address: 'abc123',
      config: {
        title: 'test title2',
        content: 'test content2',
        closable: false
      }
    }
    const idx = 3
    const tile = { top: '10px', left: '10px' }
    const wrapper = mount(
      <DefaultModal
        style={{ zIndex: props.startingZIndex + idx, ...tile }}
        config={modal.config}
        modalAddress={modal.adddress}
        closeSelf={() => null}
      />
    )
    expect(
      wrapper.containsAllMatchingElements([
        <div
          id="default-modal"
          style={{ zIndex: 103, top: '10px', left: '10px' }}
          className="modal-container"
        >
          <div className="list-component list-group">
            <div className="list-group-item active">
              <div className="header">
                <div className="corner-icons" />
                <h4 className="list-group-title">{'test title2'}</h4>
                <div className="corner-icons" />
              </div>
            </div>
            <div className="modal-content">{'test content2'}</div>
          </div>
        </div>
      ])
    ).to.equal(true)
  })
})
