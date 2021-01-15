require('@babel/register')()
require('webpack')
const Enzyme = require('enzyme')
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
Enzyme.configure({ adapter: new Adapter() })

const jsdom = require('jsdom')
const { JSDOM } = jsdom

const { document } = new JSDOM(
  '<!doctype html>\
  <html>\
    <head>\
      <meta charset="UTF-8">\
      <title>Modal-framework</title>\
    </head>\
    <body style="width:100%; height: 100%"">\
      <div id="root"></div>\
      <script src = "/dist/app.js"></script>\
    </body>\
  </html>'
).window

global.document = document
global.window = document.defaultView
global.alert = window.alert

global.navigator = {
  userAgent: 'node.js',
}
