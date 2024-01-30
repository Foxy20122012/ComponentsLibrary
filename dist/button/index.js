import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  className,
  onClick,
  disabled
}) => {
  // Aplicar estilos adicionales al botón
  const buttonStyles = `bg-blue-500 text-white px-4 py-2 rounded ${className || ""}`;
  return /*#__PURE__*/React.createElement("button", {
    className: buttonStyles,
    onClick: onClick,
    disabled: disabled
  }, children);
};
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  className: PropTypes.string,
  // Clases CSS adicionales para el botón
  onClick: PropTypes.func,
  // Manejador de clic
  disabled: PropTypes.bool // Indicador de si el botón está deshabilitado
};

export { Button as default };
