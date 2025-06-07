import React from "react";
import Carousel from "./Carousel";
import journeyimg from "../assets/mater/pexels-pixabay-533982.jpg"

const Category = () => {
  return (
    <>
      {/* Our Journey Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:flex-1 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Our Journey to True Taste
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Foodyko is a high-end web app with AI-driven automation,
                  enabling farmers and manufacturers to start selling their
                  products in seconds. Also helping them with finding natural
                  preservative methods in food preservation and packaging.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  The goal of Foodyko is to become the best place to purchase
                  high quality food products to users and help farmers to
                  convert their farm products to value added products and reduce
                  food waste.
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  The platform acts as a complete AI driven sales tool and
                  provides all digital services for the farmers, manufactures to
                  increase their revenue and find a market for their products.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:flex-1 order-1 lg:order-2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <img
                  src={journeyimg}
                  alt="Farmer working in field"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <div className="bg-[#FCDC9D] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Our Mission & Vision
        </h2>
        <p className="max-w-4xl mx-auto text-gray-800 text-sm md:text-lg leading-relaxed mb-4">
          Our mission is to empower farmers, making high-quality products
          accessible to users while promoting and supporting farming practices.
          Through our platform, we aim to bridge the gap between farmers and
          consumers, fostering a sustainable and thriving agricultural
          community.
        </p>
        <p className="max-w-4xl mx-auto text-gray-800 text-sm md:text-lg leading-relaxed">
          Our vision is to promote value-added products and minimize wastage in
          the agricultural industry, turning surplus farm produce into valuable
          assets. We strive to transform every piece of farm produce into a
          source of value, ensuring that none goes to waste and all contribute
          to the prosperity of farmers and communities.
        </p>
      </div>

      <div className="px-0 py-0 md:px-15 md:py-22 bg-white">
        <Carousel />
      </div>
    </>
  );
};

export default Category;
