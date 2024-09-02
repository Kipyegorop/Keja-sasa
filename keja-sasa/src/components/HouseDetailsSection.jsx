// src/components/HouseDetailsSection.jsx
import React from 'react';

const HouseDetailsSection = () => {
  const housesForSale = [
    {
      image: `${process.env.PUBLIC_URL}/images/houseForSale1.jpg`,
      location: 'Nakuru, Kenya',
      description: 'A beautiful house for sale with a stunning view.',
      price: 'Ksh 10,000,000',
      amenities: ['Water', 'WiFi'],
    },
    // More houses for sale
  ];

  const rentalUnits = {
    bedsitters: [
      {
        image: `${process.env.PUBLIC_URL}/images/bedsitter1.jpg`,
        location: 'Nakuru, Kenya',
        description: 'Cozy bedsitter in a quiet neighborhood.',
        price: 'Ksh 5,000 per month',
        amenities: ['Water'],
      },
      // More bedsitters
    ],
    oneBedroom: [
      {
        image: `${process.env.PUBLIC_URL}/images/oneBedroom1.jpg`,
        location: 'Nakuru, Kenya',
        description: 'Spacious one-bedroom apartment.',
        price: 'Ksh 15,000 per month',
        amenities: ['Water', 'WiFi'],
      },
      // More one-bedroom units
    ],
    fullyFurnished: [
      {
        image: `${process.env.PUBLIC_URL}/images/fullyFurnished1.jpg`,
        location: 'Nakuru, Kenya',
        description: 'Fully furnished apartment with all amenities.',
        price: 'Ksh 30,000 per month',
        amenities: ['Water', 'WiFi', 'Electricity'],
      },
      // More fully furnished units
    ],
  };

  const unitsForSale = [
    {
      image: `${process.env.PUBLIC_URL}/images/unitForSale1.jpg`,
      location: 'Nakuru, Kenya',
      description: 'Modern unit for sale in a gated community.',
      price: 'Ksh 8,000,000',
      amenities: ['Water', 'Security'],
    },
    // More units for sale
  ];

  return (
    <div className="container mx-auto mt-10">
      {/* Houses for Sale */}
      <h2 className="text-2xl font-bold mb-4">Houses for Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {housesForSale.map((house, index) => (
          <HouseDetailCard
            key={index}
            image={house.image}
            location={house.location}
            description={house.description}
            price={house.price}
            amenities={house.amenities}
          />
        ))}
      </div>

      {/* Rental Units */}
      <h2 className="text-2xl font-bold mb-4">Bedsitters for Rent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {rentalUnits.bedsitters.map((unit, index) => (
          <HouseDetailCard
            key={index}
            image={unit.image}
            location={unit.location}
            description={unit.description}
            price={unit.price}
            amenities={unit.amenities}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">One Bedroom Units for Rent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {rentalUnits.oneBedroom.map((unit, index) => (
          <HouseDetailCard
            key={index}
            image={unit.image}
            location={unit.location}
            description={unit.description}
            price={unit.price}
            amenities={unit.amenities}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Fully Furnished Units for Rent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {rentalUnits.fullyFurnished.map((unit, index) => (
          <HouseDetailCard
            key={index}
            image={unit.image}
            location={unit.location}
            description={unit.description}
            price={unit.price}
            amenities={unit.amenities}
          />
        ))}
      </div>

      {/* Units for Sale */}
      <h2 className="text-2xl font-bold mb-4">Units for Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {unitsForSale.map((unit, index) => (
          <HouseDetailCard
            key={index}
            image={unit.image}
            location={unit.location}
            description={unit.description}
            price={unit.price}
            amenities={unit.amenities}
          />
        ))}
      </div>
    </div>
  );
};

const HouseDetailCard = ({ image, location, description, price, amenities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={image} alt="House" className="w-full h-48 object-cover rounded-md mb-4" />
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-6-6A1 1 0 014 10V5a3 3 0 013-3h2a1 1 0 110 2H7a1 1 0 00-1 1v5.586l5.293 5.293a1 1 0 001.414 0L18 10.414V6a1 1 0 00-1-1h-2a1 1 0 010-2h2a3 3 0 013 3v5a1 1 0 01-.293.707l-6 6A1 1 0 0110 18z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-500">{location}</p>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center mb-2">
        <p className="text-gray-500 font-bold">{price}</p>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-6-6A1 1 0 014 10V5a3 3 0 013-3h2a1 1 0 110 2H7a1 1 0 00-1 1v5.586l5.293 5.293a1 1 0 001.414 0L18 10.414V6a1 1 0 00-1-1h-2a1 1 0 010-2h2a3 3 0 013 3v5a1 1 0 01-.293.707l-6 6A1 1 0 0110 18z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-500">Amenities: {amenities.join(', ')}</p>
      </div>
    </div>
  );
};

export default HouseDetailsSection;
