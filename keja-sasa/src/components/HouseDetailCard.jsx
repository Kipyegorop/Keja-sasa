// src/components/HouseDetailCard.jsx
import React from 'react';

const HouseDetailCard = ({ image, location, description, price, amenities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* House Image */}
      <img src={image} alt="House" className="w-full h-48 object-cover rounded-md mb-4" />

      {/* Location */}
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-6-6A1 1 0 014 10V5a3 3 0 013-3h2a1 1 0 110 2H7a1 1 0 00-1 1v5.586l5.293 5.293a1 1 0 001.414 0L18 10.414V6a1 1 0 00-1-1h-2a1 1 0 010-2h2a3 3 0 013 3v5a1 1 0 01-.293.707l-6 6A1 1 0 0110 18z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-500">{location}</p>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Price */}
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-6-6A1 1 0 014 10V5a3 3 0 013-3h2a1 1 0 110 2H7a1 1 0 00-1 1v5.586l5.293 5.293a1 1 0 001.414 0L18 10.414V6a1 1 0 00-1-1h-2a1 1 0 010-2h2a3 3 0 013 3v5a1 1 0 01-.293.707l-6 6A1 1 0 0110 18z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-500">{price}</p>
      </div>

      {/* Amenities */}
      <div className="flex items-center">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-6-6A1 1 0 014 10V5a3 3 0 013-3h2a1 1 0 110 2H7a1 1 0 00-1 1v5.586l5.293 5.293a1 1 0 001.414 0L18 10.414V6a1 1 0 00-1-1h-2a1 1 0 010-2h2a3 3 0 013 3v5a1 1 0 01-.293.707l-6 6A1 1 0 0110 18z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-500">{amenity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseDetailCard;
