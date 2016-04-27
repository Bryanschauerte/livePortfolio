import jsdom from 'jsdom';
const doc = jsdom.jsdom( "<!doctype html><html><body></body></html>" );
const win = doc.defaultView;
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
global.document = doc;
global.window = win;
//hoist the properties from the jdom window object, like navigator, to the node.js
// global object. needs to be done without the "window. " prefix
Object.keys( window )
.forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
chai.use( chaiImmutable );
