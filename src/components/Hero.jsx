import { img } from "framer-motion/client";
import React from "react";

const categories = [
  {
    name: "Confectionery",
    image: <img src="src/assets/desserts.png" alt="Confectionery" className="w-12 h-12 object-contain" />,
  },
  {
    name: "Eggs & Dairy",
    image: <img src="src/assets/dairy.png" alt="Eggs & Dairy" className="w-12 h-12 object-contain" />,
  },
  {
    name: "Snacks & Beverages",
    image: <img src="src/assets/snack.png" alt="Snacks & Beverages" className="w-12 h-12 object-contain" />,
  },
  {
    name: "Grains",
    image: <img src="src/assets/wheat.png" alt="Grains" className="w-12 h-12 object-contain" />,
  },
  {
    name: "Grocery",
    image: <img src="src/assets/grocery.png" alt="Grocery" className="w-12 h-12 object-contain" />,
  },
  {
    name: "Herbs & Spices",
    image: <img src="src/assets/mortar.png" alt="Herbs & Spices" className="w-12 h-12 object-contain" />,
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
          <button className="mt-6 px-5 py-3 border-2 border-gray-300 text-black rounded-lg hover:bg-gray-100">
            Visit Shop
          </button>
        </div>

        {/* Center Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/src/assets/foodyko_img1.png"
            alt="Foodyko Panda"
            className="w-[300px] md:w-[400px] object-contain transition-transform duration-200 ease-in-out hover:scale-102"
          />
        </div>

        {/* Right Section (Styled like the reference image) */}
        <div
          className="w-full md:w-1/3 bg-black text-white flex flex-col items-center justify-end p-12 h-[500px]"
          style={{ fontFamily: "''" }}
        >
          <h1 className="text-lg md:text-xl font-semibold text-center">
            Sale is on!
          </h1>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-center whitespace-nowrap">
            Upto 15% Off on Herbs & Spices
          </h2>
          <p className="text-gray-300 mt-4 text-center text-lg md:text-xl">
            Brighten up your day with our selection of <br /> fresh,
            farm-to-table fruits.
          </p>
          <button className="mt-6 px-6 py-3 border border-white text-white rounded-lg hover:bg-red-900 text-lg md:text-xl">
            New Arrivals
          </button>
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
      <div className="text-center py-14 px-6 md:px-12">
        <h2 className="text-3xl" style={{ fontFamily: "''" }}>
          Browse by category
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          From farm-fresh produce to wholesome snacks, explore our curated
          categories
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-24 md:gap-32">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              {category.image}
              <p className="text-gray-700 text-sm md:text-lg font-sans">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fresh & Affordable Banner */}
      <div className="relative container hidden sm:block  mx-auto px-4 md:px-0">
        <img
          src="src/assets/mater/Banner-bgimg.jpeg"
          alt="Foodyko Banner"
          className="w-full h-auto rounded-sm"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 py-6 md:py-10">
          <h4 className="text-sm md:text-lg lg:text-xl mb-2">
            Fresh & Affordable!
          </h4>
          <p
            className="text-lg md:text-2xl lg:text-3xl mb-2"
            style={{ fontFamily: "''" }}
          >
            Save up to 15% on your grocery essentials.
          </p>
          <p className="mb-4 text-sm md:text-lg">
            Enjoy quality you can trust, for prices you’ll love.
          </p>
          <button className="border-2 border-gray-300 text-white text-sm md:text-lg px-4 md:px-6 py-2 rounded-md shadow hover:bg-gray-100 hover:text-black transition duration-300">
            Start Saving Today
          </button>
        </div>
      </div>

      {/* Community Banner Section */}
      <div className="relative w-full mt-12 flex flex-col justify-center items-center text-center">
        <img
          src="src/assets/Banner111.jpeg"
          alt="Community Banner"
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 py-6 sm:py-10">
          <div className="p-3 sm:p-4 md:p-10 max-w-5xl w-full rounded-md space-y-4 sm:space-y-6">
            <h2
              className="text-base sm:text-xl md:text-4xl font-bold text-white mb-0 md:mb-30 leading-snug sm:leading-tight"
              style={{ fontFamily: "''" }}
            >
              Strengthening Communities with <br />
              <span className="text-white">5,000+ Farmers at Heart</span>
            </h2>
            {/* Hide this paragraph on screens < sm */}
            <p className="hidden sm:block text-xs sm:text-sm md:text-lg text-gray-800 leading-relaxed p-3 rounded-md">
              At the heart of our mission is a steadfast commitment to
              empowering over 5,000 farmers, ensuring their hard work and
              dedication are recognized and rewarded. We believe that thriving
              communities start with those who nurture the land, and through
              fair partnerships, sustainable practices, and innovative
              solutions, we’re helping farmers unlock their true potential. By
              connecting their produce to consumers nationwide, we’re creating a
              bridge that supports livelihoods, uplifts rural economies, and
              fosters a future where every harvest is a step toward prosperity
              for farming communities.
            </p>

            {/* Subheading */}
            <h3 className="mt-4 sm:mt-0 text-xs sm:text-sm md:text-xl font-bold text-[#805c26] leading-relaxed">
              Born out of a passion for flavors, community, and innovation,{" "}
              <br />
              <span className="text-[#805c26] font-bold">
                Foodyko is here to redefine the way you experience food.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
