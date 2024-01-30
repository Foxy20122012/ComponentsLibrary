// .neutrino.js
const standard = require('@neutrinojs/standardjs');
const reactComponents = require('@neutrinojs/react-components');

module.exports = {
  options: {
    root: __dirname,
    fallback: {
      "fs": false,
      "path": false,
      "os": false
    }
  },
  use: [
    standard(),
    reactComponents()
  ],
};
