// src/components/HouseDetails.jsx
import React from 'react';

const HouseDetails = ({ house }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{house.name}</h2>
      <img src={house.imageUrl} alt={house.name} className="w-full h-64 object-cover rounded-md mt-4" />
      <p className="mt-2">{house.description}</p>
      <p className="text-blue-500 font-semibold mt-2">{house.price}</p>
      <p className="mt-2">Location: {house.location}</p>

      {/* Additional House Details */}
      <p className="mt-2">Bedrooms: {house.bedrooms}</p>
      <p className="mt-2">Bathrooms: {house.bathrooms}</p>
      <p className="mt-2">Area: {house.area} sqft</p>
    </div>
  );
};

export default HouseDetails;
