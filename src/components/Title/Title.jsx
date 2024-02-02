import React from 'react';
import PropTypes from 'prop-types';

const Titulo = ({ title, size, showDivider, textPosition }) => {
  const fontSizeClasses = {
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    // Puedes agregar más tamaños según tus necesidades
  };

  const textAlignmentClasses = {
    'start': 'items-start',
    'center': 'items-center',
    'end': 'items-end',
    // Puedes agregar más posiciones según tus necesidades
  };

  return (
    <div className={`titulo-container py-8 sm:py-16 text-[#050609] font-medium flex flex-col sm:flex-row gap-4 ${fontSizeClasses[size]} ${textAlignmentClasses[textPosition]}`}>
      {title}
      {showDivider && <div className="titulo-divider bg-blue-600 h-1 sm:h-2 md:h-3 w-16 sm:w-24 md:w-32 mt-2 sm:mt-0 ml-2 sm:ml-4"></div>}
    </div>
  );
};

Titulo.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xl', '2xl', '3xl']).isRequired,
  showDivider: PropTypes.bool, // Esta línea hace que showDivider sea opcional
  textPosition: PropTypes.oneOf(['start', 'center', 'end']), // Nueva prop para la posición del texto
};

export default Titulo;
