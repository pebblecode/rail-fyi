'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = _react2.default.createClass({
  displayName: 'Layout',

  render: function render() {
    return _react2.default.createElement(
      'html',
      null,
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement(
          'title',
          null,
          this.props.title || "C2C App"
        ),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/styles.css' })
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement('div', { className: 'container', id: 'app-mount', dangerouslySetInnerHTML: { __html: this.props.remount } }),
        _react2.default.createElement('script', { id: 'app-state', dangerouslySetInnerHTML: { __html: this.props.state } })
      ),
      _react2.default.createElement('script', { src: '/js/build.js' })
    );
  }
});

exports.default = Layout;
//# sourceMappingURL=layout.js.map