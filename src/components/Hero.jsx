import { div, img } from "framer-motion/client";
import React from "react";

const categories = [
  {
    name: "Confectionery",
    image: (
      <img
        src="src/assets/desserts.png"
        alt="Confectionery"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    name: "Eggs & Dairy",
    image: (
      <img
        src="src/assets/dairy.png"
        alt="Eggs & Dairy"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    name: "Snacks & Beverages",
    image: (
      <img
        src="src/assets/snack.png"
        alt="Snacks & Beverages"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    name: "Grains",
    image: (
      <img
        src="src/assets/wheat.png"
        alt="Grains"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    name: "Grocery",
    image: (
      <img
        src="src/assets/grocery.png"
        alt="Grocery"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
      />
    ),
  },
  {
    name: "Herbs & Spices",
    image: (
      <img
        src="src/assets/mortar.png"
        alt="Herbs & Spices"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
      />
    ),
  },
];
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[500px] border-t border-gray-300">
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-6 md:p-12">
          <h1
            className="text-red-600 text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "''" }}
          >
            From God's Own <br /> Farmers
          </h1>
          <p className="text-gray-600 mt-4 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
            Grown with intention, delivered with wellness in mind
          </p>
        </div>

        {/* Center Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="src/assets/foodyko_img1.png"
            alt="Foodyko Panda"
            className="w-[300px] md:w-[400px] object-contain transition-transform duration-200 ease-in-out hover:scale-102"
          />
        </div>

        {/* Right Section - Perfectly Centered */}
        <div className="w-full md:w-1/3 bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 min-h-[400px] md:h-[500px]">
          <div className="flex flex-col items-center justify-center text-center space-y-6 w-full">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold px-4">
              <span
                className="text-white whitespace-nowrap"
                style={{ fontFamily: "''" }}
              >
                Join the Foodyko Seller Community
              </span>
              <br />
              <span className="text-gray-400 text-base md:text-lg lg:text-xl font-normal">
                Let's Grow Together!
              </span>
            </h1>
            <a
              href="https://forms.gle/ciR2g4hiBhKMGXXX6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full"
            >
              <button className="flex items-center justify-center gap-2 px-5 py-3 border border-white text-white hover:bg-red-900 transition-colors duration-300 text-base md:text-lg w-full max-w-[220px]">
                Seller Registration →
              </button>{" "}
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#A47C3B] text-white py-12 flex flex-col md:flex-row items-center justify-around w-full space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/homegrown.png"
            alt="Farm-Fresh Offerings"
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <span className="text-sm md:text-lg">Farm-Fresh Offerings</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/sustainablility.png"
            alt="Sustainable Sourcing"
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <span className="text-sm md:text-lg">Sustainable Sourcing</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/maple-leaf.png"
            alt="Seasonal Picks"
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <span className="text-sm md:text-lg">Seasonal Picks</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/box.png"
            alt="Customizable Trial Box"
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <span className="text-sm md:text-lg">Customizable Trial Box</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/delivery-truck.png"
            alt="Flexible Delivery"
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <span className="text-sm md:text-lg">Flexible Delivery</span>
        </div>
      </div>

      {/* Browse by category */}
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
          style={{ fontFamily: "''" }}
        >
          Browse by category
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
          From farm-fresh produce to wholesome snacks, explore our curated
          categories
        </p>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 sm:p-6 hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4">
                {category.image}
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-red-600 transition-colors">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
