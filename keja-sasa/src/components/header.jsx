// src/components/Header.jsx
import React from 'react';

const Header = () => {
return (
    <header className="bg-zinc-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Rental Hub</div>
        <input 
            type="text" 
            placeholder="Search houses in Nakuru..." 
            className="p-2 rounded-md text-black" // Modified code: changed text color to black
        />
    </header>
);
};

export default Header;
