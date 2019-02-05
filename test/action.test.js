import { expect } from 'chai'
import {
  openModal,
  closeModal,
  closeAllModals
} from '../src/actions/modalActions'

describe('modal framework actions', function() {
  it('Should create an open_modal action', () => {
    expect(openModal('abc123', {})).to.deep.equal({
      type: 'open_modal',
      address: 'abc123',
      modalConfig: {}
    })
  })
  it('Should create a close_modal action', () => {
    expect(closeModal('abc123')).to.deep.equal({
      type: 'close_modal',
      address: 'abc123'
    })
  })
  it('Should create a close_all_modals action', () => {
    expect(closeAllModals()).to.deep.equal({
      type: 'close_all_modals'
    })
  })
})
