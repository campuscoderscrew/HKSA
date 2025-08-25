import React, { useState } from 'react';


const Navbar = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const toggleEventsDropdown = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  const closeDropdown = () => {
    setIsEventsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
      
      <div className="flex items-center space-x-5">
        <a href="/" className="flex items-center">
          <img src={"hong kong.png"} alt="Logo" className="w-10 h-auto" />
          <h1 className="text-red-500 text-xl font-bold ml-5" style={{ fontFamily: 'Exo, sans-serif' }}>Hong Kong Student Association</h1>
        </a>
      </div>

      
      <ul className="flex gap-6">
        <li className="relative">
          <a href="#home" className="text-red-500 font-medium py-2 px-3 rounded-lg hover:bg-gray-400 transition duration-200" style={{ fontFamily: 'Exo, sans-serif' }}>Home</a>
        </li>
        <li className="relative">
          <a href="About" className="text-red-500 font-medium py-2 px-3 rounded-lg hover:bg-gray-400 transition duration-200" style={{ fontFamily: 'Exo, sans-serif' }}>About</a>
        </li>
        <li className="relative" onMouseEnter={toggleEventsDropdown}>
          <a href="#events" className="text-red-500 font-medium py-2 px-3 rounded-lg hover:bg-gray-400 transition duration-200" style={{ fontFamily: 'Exo, sans-serif' }}>
            Events ▾
          </a>
          {isEventsOpen && (
            <ul className="absolute left-0 top-9 bg-white rounded-lg shadow-lg py-2 w-36">
              <li><a href="#upcoming" className="block py-2 px-4 text-gray-800 hover:bg-gray-400" style={{ fontFamily: 'Exo, sans-serif' }}>Upcoming</a></li>
              <li><a href="#past" className="block py-2 px-4 text-gray-800 hover:bg-gray-400" style={{ fontFamily: 'Exo, sans-serif' }}>Past</a></li>
            </ul>
          )}
        </li>
        <li className="relative">
          <a href="#officers" className="text-red-500 font-medium py-2 px-3 rounded-lg hover:bg-gray-400 transition duration-400" style={{ fontFamily: 'Exo, sans-serif' }}>Officers</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
