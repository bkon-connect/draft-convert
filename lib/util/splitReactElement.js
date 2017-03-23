'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitReactElement;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitReactElement(element) {
  var tags = _server2.default.renderToStaticMarkup(_react2.default.cloneElement(element, {}, '\r')).split('\r');

  (0, _invariant2.default)(tags.length > 1, 'convertToHTML: Element of type ' + element.type + ' must render children');

  (0, _invariant2.default)(tags.length < 3, 'convertToHTML: Element of type ' + element.type + ' cannot use carriage return character');

  return {
    start: tags[0],
    end: tags[1]
  };
}