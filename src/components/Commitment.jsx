import React from "react";

import planetEarth from "../assets/planet-earth.png";
import badge from "../assets/badge.png";
import creativity from "../assets/creativity.png";
import sustainable from "../assets/sustainable.png";
import uniqueImage from "../assets/mater/Unique.png";

function Commitment() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-22 bg-white">
        {/* Left Side - Text Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What makes us <br /> <span className="text-black">Unique</span>
          </h2>

          {/* Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <img
                src={planetEarth}
                alt="Sustainability"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">Sustainability</h3>
                <p className="text-gray-600">
                  Foodyko promotes sustainability by ethically sourcing from local
                  farmers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={badge}
                alt="Quality"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">Quality</h3>
                <p className="text-gray-600">
                  Farm-fresh produce and curated gift bundles, carefully vetted
                  for top quality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={creativity}
                alt="Innovation"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-gray-600">
                  Trial Shop, Taste Now packs, and custom options set us apart.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={sustainable}
                alt="Eco-Friendly Packaging"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">Eco-Friendly Packaging</h3>
                <p className="text-gray-600">
                  We use eco-friendly packaging to reduce waste and support a
                  circular economy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src={uniqueImage}
            alt="Unique Foodyko"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Green Section */}
      <div className="bg-green-800 text-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Box 1 */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">Explore Before You Commit</h3>
            <p className="text-md text-gray-300 md:text-base">
              Try sample-sized products to ensure they meet your needs before investing in full-sized purchases.
            </p>
          </div>

          {/* Box 2 */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">Wide Range of Choices</h3>
            <p className="text-md text-gray-300 md:text-base">
              Access a diverse collection of trial packs across multiple categories, all in one place.
            </p>
          </div>

          {/* Box 3 */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">Discover New Favorites</h3>
            <p className="text-md text-gray-300 md:text-base">
              Experience a variety of sample-sized products to find what suits your taste and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commitment;
