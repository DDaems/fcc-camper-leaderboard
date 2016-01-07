var React = require('react');
var ReactDOM = require('react-dom');

import './scss/styles.scss'; // ES6 module syntax
require('./css/styles.css');    // CommonJS module syntax, used by node.js


ReactDOM.render(<h1>Finally, progress!</h1>, document.getElementById('root'));
