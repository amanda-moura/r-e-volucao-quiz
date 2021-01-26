"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: url(", ");\n  background-color: ", ";\n  flex: 1;\n  @media screen and (max-width: 500px) {\n    background-image: none;\n    &:after {\n      content: \"\";\n      background-size: cover;\n    background-position: center;\n      background-image:\n        linear-gradient(transparent, ", "),\n        url(", ");\n      display: block;\n      width: 100%;\n      height: 210px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: 1;\n    }\n    *:first-child {\n      position: relative;\n      z-index: 10;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var QuizBackground = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var backgroundImage = _ref.backgroundImage;
  return backgroundImage;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.mainBg;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.mainBg;
}, function (_ref4) {
  var backgroundImage = _ref4.backgroundImage;
  return backgroundImage;
});

var _default = QuizBackground;
exports["default"] = _default;