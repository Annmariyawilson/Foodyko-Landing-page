import React from "react";
import Carousel from "./Carousel";

const Category = () => {
  return (
    <>
      {/* Our Journey Section */}
      <div className="flex justify-center px-4 py-12 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl w-full">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Our Journey to <br /> True Taste
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              For years, the market has been flooded with mass-produced food
              products that often compromise on quality and authenticity. But we
              believed it was time for a change. As people increasingly sought
              fresh, authentic, and trustworthy food options, we envisioned a
              platform that celebrates the richness of locally-sourced and
              artisanal products.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              We dedicated ourselves to curating a selection of packaged foods
              that embody both authenticity and excellence, ensuring every bite
              is a testament to quality.
            </p>
            <button className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition">
              Contact us
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="src/assets/mater/pexels-pixabay-533982.jpg"
              alt="Farmer working in field"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#FCDC9D] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Our Mission & Vision
        </h2>
        <p className="max-w-4xl mx-auto text-gray-800 text-sm md:text-lg leading-relaxed mb-4">
          To revolutionize the way people experience food by bridging the gap
          between farmers and food lovers, ensuring sustainability,
          transparency, and quality in every product.
        </p>
        <p className="max-w-4xl mx-auto text-gray-800 text-sm md:text-lg leading-relaxed">
          Empowering farmers while providing customers with an exceptional
          food-shopping experience. Through innovative offerings like trial
          packs, gifting solutions, and exclusive subscriptions, we aim to make
          premium, authentic food products accessible to everyone.
        </p>
      </div>

      <div className="px-0 py-0 md:px-15 md:py-22 bg-white">
        <Carousel />
      </div>
    </>
  );
};

export default Category;
