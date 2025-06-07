import React from "react";
import Logo from "../assets/mater/foodyko.png"

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-4 md:px-10 w-full border-b border-gray-300">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-1">
          <img
            src={Logo}
            alt="Foodyko Logo"
            className="w-42 h-18"
          />
        </div>

        {/* Enquiry Button */}
        <div>
          <a
            href="https://forms.gle/4ohq4DNao3zRz9zY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-medium text-xs 
              sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 rounded-md transition duration-300"
            >
              Make an Enquiry
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
