import React from 'react';

const Navbar = () => (
  <header className="sticky top-0 flex justify-between items-center z-50 shadow-md bg-white">
    <nav className="p-4 z-20 bg-white w-full">
      <div className="flex items-center space-x-5">
        <a href="/" className="flex items-center">
          <img src={"hksalogo.png"} alt="Logo" className="w-14 h-auto" />
          <h1 className="text-red-700 text-xl font-bold ml-5 font-sans">Hong Kong Student Association</h1>
        </a>
      </div>
    </nav>
    <input type="checkbox" id="nav-toggle" className="peer hidden" aria-label="Toggle menu" />
    <label htmlFor="nav-toggle" className="md:hidden flex items-center justify-center w-10 h-10 cursor-pointer absolute right-4 top-4 z-30">
      {/* Hamburger Icon */}
      <svg className="nav-hamburger-icon transition-all duration-300 ease-in-out text-red-700 w-8 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      {/* Close Icon */}
      <svg className="nav-close-icon transition-all duration-300 ease-in-out text-red-700 w-8 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6m0 12L6 6" />
      </svg>
    </label>
    <ul className="font-sans flex gap-6 md:flex-row md:static md:shadow-none md:translate-y-0 md:w-auto md:p-0 md:text-center
      flex-col absolute left-0 top-full w-full bg-white/95 shadow-lg text-left p-6
      transition-all duration-300 ease-in-out -translate-y-[100%] peer-checked:translate-y-0
      md:opacity-100 md:pointer-events-auto md:z-10 md:mr-4 
    ">
      <li className="w-full md:w-auto"><a href="/" className="text-red-700 font-bold py-2 px-2 rounded-lg block transition duration-200 hover:text-black-400 relative after:content-[''] after:block after:absolute after:left-0 after:md:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Home</a></li>
      <li className="w-full md:w-auto"><a href="/about" className="text-red-700 font-bold py-2 px-2 rounded-lg block transition duration-200 hover:text-black-400 relative after:content-[''] after:block after:absolute after:left-0 after:md:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">About</a></li>
      <li className="w-full md:w-auto"><a href="/events" className="text-red-700 font-bold py-2 px-2 rounded-lg block transition duration-200 hover:text-black-400 relative after:content-[''] after:block after:absolute after:left-0 after:md:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Events</a></li>
      <li className="w-full md:w-auto"><a href="/officers" className="text-red-700 font-bold py-2 px-2 rounded-lg block transition duration-200 hover:text-black-400 relative after:content-[''] after:block after:absolute after:left-0 after:md:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Officers</a></li>
    </ul>
  </header>
);

export default Navbar;
