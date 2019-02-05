import { expect } from 'chai'
import { makeId, isFunction, makeUniqueId } from '../src/utility/utility'

describe('Utility function tests', function() {
  it('Should create a random string id of length 5', () => {
    expect(makeId()).to.match(
      /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{5}/
    )
  })
  it('Should create a random string id of length 10', () => {
    expect(makeId(10)).to.match(
      /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{10}/
    )
  })
  it('Should create a random string id of length 10', () => {
    expect(makeUniqueId(10, [])).to.match(
      /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{10}/
    )
  })
  it('Should create a random string id of length 5', () => {
    expect(makeUniqueId()).to.match(
      /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{5}/
    )
  })
  it('Should throw an id creation error', () => {
    expect(() =>
      makeUniqueId(1, [
        { address: 'A' },
        { address: 'B' },
        { address: 'C' },
        { address: 'D' },
        { address: 'E' },
        { address: 'F' },
        { address: 'G' },
        { address: 'H' },
        { address: 'I' },
        { address: 'J' },
        { address: 'K' },
        { address: 'L' },
        { address: 'M' },
        { address: 'N' },
        { address: 'O' },
        { address: 'P' },
        { address: 'Q' },
        { address: 'R' },
        { address: 'S' },
        { address: 'T' },
        { address: 'U' },
        { address: 'V' },
        { address: 'W' },
        { address: 'X' },
        { address: 'Y' },
        { address: 'Z' },
        { address: 'a' },
        { address: 'b' },
        { address: 'c' },
        { address: 'd' },
        { address: 'e' },
        { address: 'f' },
        { address: 'g' },
        { address: 'h' },
        { address: 'i' },
        { address: 'j' },
        { address: 'k' },
        { address: 'l' },
        { address: 'm' },
        { address: 'n' },
        { address: 'o' },
        { address: 'p' },
        { address: 'q' },
        { address: 'r' },
        { address: 's' },
        { address: 't' },
        { address: 'u' },
        { address: 'v' },
        { address: 'w' },
        { address: 'x' },
        { address: 'y' },
        { address: 'z' },
        { address: '0' },
        { address: '1' },
        { address: '2' },
        { address: '3' },
        { address: '4' },
        { address: '5' },
        { address: '6' },
        { address: '7' },
        { address: '8' },
        { address: '9' }
      ])
    ).to.throw('Unable to generate unique address. To many modals open.')
  })
  it('Should detect a non function', () => {
    expect(isFunction('not a function')).to.equal(false)
  })
  it('Should detect a function', () => {
    expect(isFunction(() => null)).to.equal(true)
  })
})
