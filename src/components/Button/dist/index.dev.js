"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  border: 0;\n  width: 100%;\n  padding: 10px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 1;\n  text-transform: uppercase;\n  outline: 0;\n  transition: .3s;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  &:disabled {\n    background-color: #979797;\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.contrastText;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderRadius;
});

Button.propTypes = {
  type: _propTypes["default"].oneOf(['submit', 'type', 'button']).isRequired,
  children: _propTypes["default"].node.isRequired
};
var _default = Button;
exports["default"] = _default;