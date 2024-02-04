import React from 'react';
import PropTypes from 'prop-types';

var Titulo = function Titulo(_ref) {
  var title = _ref.title,
    size = _ref.size,
    showDivider = _ref.showDivider,
    textPosition = _ref.textPosition;
  var fontSizeClasses = {
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
    // Puedes agregar más tamaños según tus necesidades
  };
  var textAlignmentClasses = {
    'start': 'items-start',
    'center': 'items-center',
    'end': 'items-end'
    // Puedes agregar más posiciones según tus necesidades
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "titulo-container py-8 sm:py-16 text-[#050609] font-medium flex flex-col sm:flex-row gap-4 ".concat(fontSizeClasses[size], " ").concat(textAlignmentClasses[textPosition])
  }, title, showDivider && /*#__PURE__*/React.createElement("div", {
    className: "titulo-divider bg-blue-600 h-1 sm:h-2 md:h-3 w-16 sm:w-24 md:w-32 mt-2 sm:mt-0 ml-2 sm:ml-4"
  }));
};
Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xl', '2xl', '3xl']).isRequired,
  showDivider: PropTypes.bool,
  // Esta línea hace que showDivider sea opcional
  textPosition: PropTypes.oneOf(['start', 'center', 'end']) // Nueva prop para la posición del texto
};

export { Titulo as default };
