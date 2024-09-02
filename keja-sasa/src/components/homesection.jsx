// src/components/HomeSection.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle, faDollarSign, faTint, faWifi } from '@fortawesome/free-solid-svg-icons';

const HomeSection = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/background1.jpg`,
    `${process.env.PUBLIC_URL}/images/background2.jpg`,
    `${process.env.PUBLIC_URL}/images/background3.jpg`,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-gray-100 opacity-100">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">Find your next perfect</h1>
        <h2 className="text-slate-500 font-bold text-3xl lg:text-5xl">home with ease</h2>
        <p className="text-gray-500 text-lg max-w-2xl">
          Rentals hub is the best place to find your next perfect to live.
          We have a wide range of properties for you to choose from.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-4">
          Find Your Home
        </button>
      </div>
      
      {/* House For Sale Details */}
      <br></br>
    <div>
      <p className='text-black-600 font-weight: 900; text-3xl font-bold text-center'>Houses for sale </p>
    </div>

    {/*first card container*/}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200  rounded-lg shadow-lg p-4">
            <img src={`${process.env.PUBLIC_URL}/images/house1.jpg`} alt="House 1" className="w-full h-48 object-cover rounded-md transition-all duration-500 transform hover:scale-110" />
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Location</p>
            </div>
            <p className="text-gray-500">303 Birch Boulevard, Greenfield Estates
            </p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Description</p>
            </div>
            <p className="text-gray-500">This elegant 3-bedroom, 2.5-bathroom townhouse combines modern amenities with classic charm. The main level features a large living room, a dining area, and a gourmet kitchen with a breakfast bar. Upstairs, the master bedroom has an en-suite bathroom and a walk-in closet. The private patio provides a serene outdoor space, and the attached garage adds convenience.</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Price</p>
            </div>
            <p className="text-gray-500">Kshs 11,000,000 </p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Amenities</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Water</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faWifi} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">WiFi</p>
            </div>
          </div>

          {/*second card container*/}
          <div className="bg-gray-200  rounded-lg shadow-lg p-4">
            <img src={`${process.env.PUBLIC_URL}/images/house2.jpg`} alt="House 1" className="w-full h-48 object-cover rounded-md transition-all duration-500 transform hover:scale-110" />
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Location</p>
            </div>
            <p className="text-gray-500">202 Elm Road, Greenfield Estates</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Description</p>
            </div>
            <p className="text-gray-500">A spacious 4-bedroom, 3-bathroom colonial-style home with a formal dining room, family room, and a large kitchen with an island. The master suite features a walk-in closet and a luxurious bathroom with dual sinks and a rain shower. The backyard has a pool and a deck, perfect for summer fun. A finished attic offers additional living space or storage.

.</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Price</p>
            </div>
            <p className="text-gray-500">Kshs 8,000,000 per unit</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Amenities</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Water</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faWifi} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">WiFi</p>
            </div>
          </div>

          {/*third card container*/}
          <div className="bg-gray-200  rounded-lg shadow-lg p-4</div>">
            <img src={`${process.env.PUBLIC_URL}/images/house3.jpg`} alt="House 1" className="w-full h-48 object-cover rounded-md transition-all duration-500 transform hover:scale-110" />
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Location</p>
            </div>
            <p className="text-gray-500">123 Maple Avenue, Greenfield Estates</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Description</p>
            </div>
            <p className="text-gray-500">This charming two-story home offers 4 bedrooms and 3 bathrooms, complete with a spacious kitchen and a cozy living room with a fireplace. The large backyard is perfect for outdoor gatherings, and the two-car garage provides ample parking space. Recently updated with new flooring and modern appliances, this house is move-in ready. .</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Price</p>
            </div>
            <p className="text-gray-500">Kshs 7,000,000 </p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Amenities</p>
            </div>
            <div className="flex items-cente</div>r mt-1">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Water</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faWifi} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">WiFi</p>
            </div>
          </div>
          
          {/*forth card container*/}
          <div className="bg-gray-200  rounded-lg shadow-lg p-4">
            <img src={`${process.env.PUBLIC_URL}/images/house4.jpg`} alt="House 1" className="w-full h-48 object-cover rounded-md transition-all duration-500 transform hover:scale-110" />
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Location</p>
            </div>
            <p className="text-gray-500">456 Oak Street, Greenfield Estates</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Description</p>
            </div>
            <p className="text-gray-500">A beautiful 3-bedroom, 2-bathroom ranch-style home featuring an open floor plan with a renovated kitchen, granite countertops, and stainless steel appliances. The master suite includes a walk-in closet and an en-suite bathroom with a soaking tub. Enjoy a peaceful morning on the covered front porch or entertain guests on the large deck in the backyard..</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Price</p>
            </div>
            <p className="text-gray-500">Kshs 12,000,000 per unit</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Amenities</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Water</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faWifi} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">WiFi</p>
            </div>
          </div>

           {/*fifth card container*/}
          <div className="bg-gray-200  rounded-lg shadow-lg p-4">
            <img src={`${process.env.PUBLIC_URL}/images/house5.jpg`} alt="House 1" className="w-full h-48 object-cover rounded-md transition-all duration-500 transform hover:scale-110" />
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Location</p>
            </div>
            <p className="text-gray-500"> 789 Pine Drive, Greenfield Estates. </p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Description</p>
            </div>
            <p className="text-gray-500"> This contemporary 5-bedroom, 4-bathroom home boasts high ceilings and large windows that flood the space with natural light. The open-concept living and dining areas flow seamlessly into a gourmet kitchen, ideal for entertaining. The master bedroom includes a private balcony overlooking the landscaped garden. Additional features include a finished basement and a three-car garage.

.</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Price</p>
            </div>
            <p className="text-gray-500">Kshs 9,000,000 per unit</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Amenities</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Water</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faWifi} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">WiFi</p>
            </div>
          </div>
                    
            {/*sixth card container */}
            <div className="bg-gray-200 rounded-lg shadow-lg p-4">
            <img src={`${process.env.PUBLIC_URL}/images/house6.jpg`} alt="House 1" className="w-full h-48 object-cover rounded-md transition-all duration-500 transform hover:scale-110" />
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Location</p>
            </div>
            <p className="text-gray-500"> 101 Cedar Lane, Greenfield Estates. </p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faInfoCircle} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Description</p>
            </div>
            <p className="text-gray-500"> A quaint 2-bedroom, 1-bathroom cottage perfect for a small family or first-time homebuyers. This cozy home has a modern kitchen with new cabinetry and a breakfast nook. The living room features hardwood floors and a wood-burning stove. Outside, you'll find a fenced-in backyard with a small patio, ideal for gardening or relaxing.

.</p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Price</p>
            </div>
            <p className="text-gray-500">Kshs 15,000,000 per unit </p>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Amenities</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faTint} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">Water</p>
            </div>
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faWifi} className="h-5 w-5 mr-2 text-gray-500" />
              <p className="text-gray-500">WiFi</p>
            </div>
          </div>
          </div> 
  
        </div>
      </div>

      <br></br>
    <div>
      <p className='text-black-600 font-weight: 900; text-3xl font-bold text-center'>Houses for rent </p>
    </div>


























    </section>
  );
};

export default HomeSection;
