import React from "react";

import aiPowered from "../assets/icons/technical-support.png";
import onboarding from "../assets/icons/onboarding.png";
import preservation from "../assets/icons/gmo.png";
import valueAddition from "../assets/icons/farmer.png";
import digitalServices from "../assets/icons/digital-services.png";
import foodWastage from "../assets/icons/food-waste.png";
import uniqueImage from "../assets/mater/Unique.png";

function Commitment() {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-22 bg-white">
        {/* Left Side - Text Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            What makes us <br className="hidden sm:block" />{" "}
            <span className="text-green-800">Unique</span>
          </h2>

          {/* Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <img
                src={aiPowered}
                alt="AI-Powered Platform"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">AI-Powered Platform</h3>
                <p className="text-gray-600">
                  Intelligent automation for pricing, inventory, marketing, and
                  sales optimization.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={onboarding}
                alt="Instant Product Onboarding"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  Instant Product Onboarding
                </h3>
                <p className="text-gray-600">
                  Farmers and manufacturers can start selling within seconds
                  using a simple interface.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={preservation}
                alt="Natural Food Preservation"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  Natural Food Preservation & Eco-Friendly Packaging
                </h3>
                <p className="text-gray-600">
                  Promotes health, safety, and sustainability in food
                  distribution.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={valueAddition}
                alt="Value Addition"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  Value Addition for Farm Produce
                </h3>
                <p className="text-gray-600">
                  Transforms raw agricultural products into branded, packaged
                  goods for better revenue.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={digitalServices}
                alt="Digital Services"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  End-to-End Digital Services
                </h3>
                <p className="text-gray-600">
                  From branding and labeling to logistics and payment
                  integration, all in one platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={foodWastage}
                alt="Reduces Food Wastage"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">Reduces Food Wastage</h3>
                <p className="text-gray-600">
                  Efficient inventory and processing systems minimize waste and
                  spoilage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src={uniqueImage}
            alt="Unique Features"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Green Section */}
      <div className="bg-green-800 text-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Box 1 */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">
              Explore Before You Commit
            </h3>
            <p className="text-md text-gray-300 md:text-base">
              Try sample-sized products to ensure they meet your needs before
              investing in full-sized purchases.
            </p>
          </div>

          {/* Box 2 */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">
              Wide Range of Choices
            </h3>
            <p className="text-md text-gray-300 md:text-base">
              Access a diverse collection of trial packs across multiple
              categories, all in one place.
            </p>
          </div>

          {/* Box 3 */}
          <div>
            <h3 className="text-lg mb-2 font-semibold">
              Discover New Favorites
            </h3>
            <p className="text-md text-gray-300 md:text-base">
              Experience a variety of sample-sized products to find what suits
              your taste and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commitment;
