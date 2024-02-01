import React from 'react';
import PropTypes from 'prop-types';

const FlexiTileCard = ({ imageUrl, imageAlt, title, description, linkUrl, children }) => {
  return (
    <div className="m-5 max-w-sm">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <FlexiTileCardImage imageUrl={imageUrl} imageAlt={imageAlt} />
        <FlexiTileCardContent title={title} description={description} linkUrl={linkUrl}>
          {children}
        </FlexiTileCardContent>
      </div>
    </div>
  );
};

const FlexiTileCardImage = ({ imageUrl, imageAlt }) => (
  <img className="w-full h-48 object-cover rounded-t-lg" src={imageUrl} alt={imageAlt} />
);

const FlexiTileCardContent = ({ title, description, linkUrl, children }) => (
  <div className="p-6">
    <h1 className="mb-2 text-2xl font-bold text-gray-800 hover:underline">{title}</h1>
    <p className="mb-4 text-gray-600 text-ellipsis">{description}</p>
    {children}
    <a
      href={linkUrl}
      className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Leer Más
    </a>
  </div>
);

FlexiTileCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
};

FlexiTileCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

FlexiTileCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FlexiTileCard;
