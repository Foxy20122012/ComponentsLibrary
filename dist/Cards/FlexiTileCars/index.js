import React from 'react';
import PropTypes from 'prop-types';

var FlexiTileCard = function FlexiTileCard(_ref) {
  var imageUrl = _ref.imageUrl,
    imageAlt = _ref.imageAlt,
    title = _ref.title,
    description = _ref.description,
    linkUrl = _ref.linkUrl,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "m-5 max-w-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
  }, /*#__PURE__*/React.createElement(FlexiTileCardImage, {
    imageUrl: imageUrl,
    imageAlt: imageAlt
  }), /*#__PURE__*/React.createElement(FlexiTileCardContent, {
    title: title,
    description: description,
    linkUrl: linkUrl
  }, children)));
};
var FlexiTileCardImage = function FlexiTileCardImage(_ref2) {
  var imageUrl = _ref2.imageUrl,
    imageAlt = _ref2.imageAlt;
  return /*#__PURE__*/React.createElement("img", {
    className: "w-full h-48 object-cover rounded-t-lg",
    src: imageUrl,
    alt: imageAlt
  });
};
var FlexiTileCardContent = function FlexiTileCardContent(_ref3) {
  var title = _ref3.title,
    description = _ref3.description,
    linkUrl = _ref3.linkUrl,
    children = _ref3.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mb-2 text-2xl font-bold text-gray-800 hover:underline"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-gray-600 text-ellipsis"
  }, description), children, /*#__PURE__*/React.createElement("a", {
    href: linkUrl,
    className: "inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
  }, "Leer M\xE1s"));
};
FlexiTileCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  children: PropTypes.node
};
FlexiTileCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};
FlexiTileCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  children: PropTypes.node
};

export { FlexiTileCard as default };
