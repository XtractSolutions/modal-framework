import chai, { expect } from 'chai'
import chaiSubset from 'chai-subset'
import modalReducer from '../src/reducers/modalReducer'

chai.use(chaiSubset)

describe('modal reducer', function() {
  const state = [
    {
      address: 'modal1',
      config: { prop1: 'a', prop2: 'b' },
      stackPosition: 1
    },
    {
      address: 'abc123',
      config: { prop1: 'a2', prop2: 'b2' },
      stackPosition: 2
    },
    {
      address: 'another_modal_addres',
      config: { prop1: 'a3', prop2: 'b3' },
      stackPosition: 3
    }
  ]
  it('Should open a modal by address', () => {
    let action = {
      type: 'open_modal',
      address: 'test_modal',
      modalConfig: { prop1: 'test1', prop2: 'test1' }
    }
    expect(modalReducer(state, action)).to.deep.equal([
      ...state,
      {
        address: 'test_modal',
        config: { prop1: 'test1', prop2: 'test1' },
        stackPosition: 4
      }
    ])
  })
  it('Should update a modal by address', () => {
    let action = {
      type: 'open_modal',
      address: 'abc123',
      modalConfig: { prop1: 'test2', prop2: 'test2' }
    }
    expect(modalReducer(state, action)).to.deep.equal([
      ...state.filter(modal => modal.address !== 'abc123'),
      {
        address: 'abc123',
        config: { prop1: 'test2', prop2: 'test2' },
        stackPosition: 2
      }
    ])
  })
  it('Should close a modal by address', () => {
    let action = {
      type: 'close_modal',
      address: 'abc_123'
    }
    expect(modalReducer(state, action)).to.deep.equal([
      ...state.filter(modal => modal.address !== 'abc_123')
    ])
  })
  it('Should open a modal with a random address', () => {
    let action = {
      type: 'open_modal',
      address: () => null,
      modalConfig: { prop1: 'test3', prop2: 'test3' }
    }
    const result = modalReducer(state, action)
    expect(result).containSubset([
      ...state,
      {
        config: { prop1: 'test3', prop2: 'test3' },
        stackPosition: 4
      }
    ])
  })
  it('Should open a modal with a random address', () => {
    let action = {
      type: 'open_modal',
      address: 7,
      modalConfig: { prop1: 'test3', prop2: 'test3' }
    }
    const result = modalReducer(state, action)
    expect(result).containSubset([
      ...state,
      {
        config: { prop1: 'test3', prop2: 'test3' },
        stackPosition: 4
      }
    ])
  })
  it('Should open a modal a modal at position 1', () => {
    let action = {
      type: 'open_modal',
      address: 7,
      modalConfig: { prop1: 'test3', prop2: 'test3' }
    }
    const result = modalReducer([], action)
    expect(result).containSubset([
      ...[],
      {
        config: { prop1: 'test3', prop2: 'test3' },
        stackPosition: 1
      }
    ])
  })
  it('Should close all modals', () => {
    let action = {
      type: 'close_all_modals'
    }
    expect(modalReducer(state, action)).to.deep.equal([])
  })
  it('Should throw an address required error', () => {
    let action = {
      type: 'close_modal'
    }
    expect(() => modalReducer(state, action)).to.throw(
      'close modal action dispatched without required address property.'
    )
  })
  it('Should ignore unknown actions', () => {
    let action = {
      type: 'do_stuff'
    }
    expect(modalReducer(state, action)).to.deep.equal(state)
  })
  it('Should return an empty array as initial state', () => {
    expect(modalReducer(undefined)).to.deep.equal([])
  })
})
