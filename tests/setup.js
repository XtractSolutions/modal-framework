require('@babel/register')()
require('webpack')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({ adapter: new Adapter() })

const jsdom = require('jsdom')
const { JSDOM } = jsdom

const exposedProperties = ['window', 'navigator', 'document']

const { document } = new JSDOM(
  '<html><body><div id = "app-config" style = "display:none">{"API_BASE_URL": "https://localhost/api/v1", "BASE_PATH": "/","DEBUG": "all"}</div></body></html>'
).window

global.document = document
global.window = document.defaultView
global.alert = window.alert

Object.keys(document.defaultView).forEach(property => {
  if (
    typeof global[property] === 'undefined' &&
    // something about storage not working for opaque origins but since we arent
    // using it, just don't set those properties.
    property !== 'localStorage' &&
    property !== 'sessionStorage'
  ) {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
