import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import DefaultModal from '../../src/components/DefaultModal.jsx'
import ModalFramework from '../../src/components/ModalFramework.jsx'

describe('ModalFramework component', () => {
  const modalState = [
    {
      address: 'modal1',
      config: { title: 'a', content: 'b' },
      stackPosition: 1
    },
    {
      address: 'modal2',
      config: { title: 'abc', content: 'asdf' },
      stackPosition: 1
    },
    {
      address: 'modal3',
      config: { title: '123', content: <div>'1234sdf'</div> },
      stackPosition: 1
    }
  ]
  it('Should render container with no children', () => {
    const wrapper = mount(
      <ModalFramework
        tileConfig={{ horizontal: '10px', vertical: '10px' }}
        startingZIndex={100}
        modals={[]}
        dispatch={() => null}
        coverEnabled={true}
        coverOpacity={0.5}
      />
    )
    expect(wrapper.exists('#modal-framework-default')).to.equal(true)
    expect(wrapper.find('#default-modal')).to.have.lengthOf(0)
    expect(
      wrapper.find('#modal-framework-default').children()
    ).to.have.lengthOf(0)
  })
  it('Should render modal framework with 3 default modals and cover', () => {
    const wrapper = mount(
      <ModalFramework
        tileConfig={{ horizontal: '10px', vertical: '10px' }}
        startingZIndex={100}
        modals={modalState}
        dispatch={() => null}
        coverEnabled={true}
        coverOpacity={0.5}
      />
    )
    expect(wrapper.exists('#modal-framework-default')).to.equal(true)
    expect(wrapper.find('#default-modal')).to.have.lengthOf(3)
    expect(
      wrapper.find('#modal-framework-default').children()
    ).to.have.lengthOf(4)
  })
  it('Should render modal framework with 3 default modals and no cover', () => {
    const wrapper = mount(
      <ModalFramework
        tileConfig={{ horizontal: '10px', vertical: '10px' }}
        startingZIndex={100}
        modals={modalState}
        dispatch={() => null}
        coverEnabled={false}
        coverOpacity={0.5}
      />
    )
    expect(wrapper.exists('#modal-framework-default')).to.equal(true)
    expect(wrapper.find('#default-modal')).to.have.lengthOf(3)
    expect(
      wrapper.find('#modal-framework-default').children()
    ).to.have.lengthOf(3)
  })
  it('Should render modal framework with 3 user defined modals and cover', () => {
    const wrapper = mount(
      <ModalFramework
        tileConfig={{ horizontal: '10px', vertical: '10px' }}
        startingZIndex={100}
        modals={modalState}
        dispatch={() => null}
        coverEnabled={true}
        coverOpacity={0.5}
      >
        <div className="test-modal">test</div>
      </ModalFramework>
    )
    expect(wrapper.exists('#modal-framework-default')).to.equal(true)
    expect(wrapper.find('#default-modal')).to.have.lengthOf(0)
    expect(wrapper.find('.test-modal')).to.have.lengthOf(3)
    expect(
      wrapper.find('#modal-framework-default').children()
    ).to.have.lengthOf(4)
  })
})
