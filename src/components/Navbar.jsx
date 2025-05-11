import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-4 md:px-10 w-full border-b border-gray-300">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-1">
          <img
            src="src/assets/mater/foodyko.png"
            alt="Foodyko Logo"
            className="w-42 h-18"
          />
        </div>

        {/* Enquiry Button */}
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium text-xs 
          sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 rounded-md transition duration-300">
            Make an Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
