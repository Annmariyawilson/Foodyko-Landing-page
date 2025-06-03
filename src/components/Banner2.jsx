import React from "react";

function Banner2() {
  return (
    <div>
      {/* Desktop View with Banner */}
      <div className="hidden sm:block relative w-full mt-12 flex flex-col justify-center items-center text-center">
        <img
          src="src/assets/Banner111.jpeg"
          alt="Community Banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 py-6 sm:py-10">
          <div className="p-3 sm:p-4 md:p-10 max-w-5xl w-full rounded-md space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-xl md:text-4xl font-bold text-white mb-0 md:mb-30 leading-snug sm:leading-tight">
              Strengthening Communities with <br />
              <span className="text-white">5,000+ Farmers at Heart</span>
            </h2>
            <p className="hidden sm:block text-xs sm:text-xs md:text-base text-gray-800 leading-relaxed p-3 rounded-md">
              At the heart of our mission is a steadfast commitment to
              empowering over 5,000 farmers, ensuring their hard work and
              dedication are recognized and rewarded. We believe that thriving
              communities start with those who nurture the land, and through
              fair partnerships, sustainable practices, and innovative
              solutions, we're helping farmers unlock their true potential. By
              connecting their produce to consumers nationwide, we're creating a
              bridge that supports livelihoods, uplifts rural economies, and
              fosters a future where every harvest is a step toward prosperity
              for farming communities.
            </p>{" "}
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
      {/* Mobile View - Clean Professional Design */}
      <div className="sm:hidden bg-white py-8 px-5 rounded-lg shadow-sm mx-4 my-6 border border-gray-100">
        <div className="max-w-xs mx-auto space-y-6">
          {/* Main Heading - Clean typography */}
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Strengthening Communities
            <br />
            <span className="text-[#805c26]">with 5,000+ Farmers</span>
          </h2>

          {/* Description - Minimal card style */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm leading-relaxed">
              At the heart of our mission is a steadfast commitment to
              empowering over 5,000 farmers, ensuring their hard work and
              dedication are recognized and rewarded. We believe that thriving
              communities start with those who nurture the land, and through
              fair partnerships, sustainable practices, and innovative
              solutions, we're helping farmers unlock their true potential. By
              connecting their produce to consumers nationwide, we're creating a
              bridge that supports livelihoods, uplifts rural economies, and
              fosters a future where every harvest is a step toward prosperity
              for farming communities.
            </p>
          </div>

          {/* Highlighted Subheading - Subtle emphasis */}
          <div className="border-l-4 border-[#805c26] pl-3">
            <h3 className="text-sm font-medium text-gray-800 leading-relaxed italic">
              Born out of a passion for flavors, community, and innovation,
              Foodyko is here to redefine the way you experience food.
            </h3>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Banner2;
