// src/components/SearchResults.jsx
import React from 'react';
import HouseDetailCard from './HouseDetailCard'; // Ensure the import is correct

const SearchResults = () => {
  const houses = [
    {
      image: `${process.env.PUBLIC_URL}/images/house1.jpg`,
      location: 'Nakuru, Kenya',
      description: 'A beautiful house with stunning views and modern amenities.',
      price: 'Ksh 15,000 per month',
      amenities: ['Water', 'WiFi'],
    },
    // Add more house objects as needed
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {houses.map((house, index) => (
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
    </div>
  );
};

export default SearchResults;
