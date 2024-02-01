import React from 'react';
import PropTypes from 'prop-types';

//Este componente esta diseñado bajo el patron de diseño compount Components y asi se optimiza la carga de sus parte y es mas facil de entender al desarrollador.

var ContactForm = function ContactForm(_ref) {
  var action = _ref.action,
    method = _ref.method,
    title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("section", {
    className: "m-10 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
  }, subtitle), /*#__PURE__*/React.createElement("form", {
    action: action,
    method: method,
    className: "space-y-8"
  }, children)));
};
var FormGroup = function FormGroup(_ref2) {
  var label = _ref2.label,
    icon = _ref2.icon,
    children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: label.toLowerCase(),
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, label, icon && /*#__PURE__*/React.cloneElement(icon, {
    className: 'flex mx-auto text-[#3fccebfa]'
  })), children);
};
var TextInput = function TextInput(_ref3) {
  var name = _ref3.name,
    placeholder = _ref3.placeholder,
    required = _ref3.required;
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: name,
    className: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5",
    placeholder: placeholder,
    required: required
  });
};
var EmailInput = function EmailInput(_ref4) {
  var name = _ref4.name,
    placeholder = _ref4.placeholder,
    required = _ref4.required;
  return /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: name,
    className: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5",
    placeholder: placeholder,
    required: required
  });
};
var TextArea = function TextArea(_ref5) {
  var name = _ref5.name,
    placeholder = _ref5.placeholder,
    required = _ref5.required;
  return /*#__PURE__*/React.createElement("textarea", {
    name: name,
    rows: "6",
    className: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500",
    placeholder: placeholder,
    required: required
  });
};
var SubmitButton = function SubmitButton(_ref6) {
  var label = _ref6.label,
    icon = _ref6.icon;
  return /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#3fccebfa] hover:bg-[#67c8e6fa]"
  }, label, icon && /*#__PURE__*/React.cloneElement(icon, {
    className: 'flex mx-auto text-[#fffffffa]'
  }));
};
ContactForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.node.isRequired
};
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool
};
EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool
};
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool
};
SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element
};

export { ContactForm, EmailInput, FormGroup, SubmitButton, TextArea, TextInput };
