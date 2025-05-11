import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#B28C41] text-white py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Experience the Taste of <br /> Pure, Fresh Goodness
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
            Foodyko brings you the best of farm-fresh produce <br /> and wholesome foods, directly from trusted farmers.
          </p>
          <div className="flex space-x-5 mt-6 text-2xl text-white">
            <FaTwitter className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
            <FaGithub className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>

        {/* Right Links */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="cursor-pointer hover:underline">All Products</li>
              <li className="cursor-pointer hover:underline">Trial Shop</li>
              <li className="cursor-pointer hover:underline">Best Sellers</li>
              <li className="cursor-pointer hover:underline">Gift Bundles</li>
              <li className="cursor-pointer hover:underline">New Arrivals</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="cursor-pointer hover:underline">Contact Us</li>
              <li className="cursor-pointer hover:underline">FAQs</li>
              <li className="cursor-pointer hover:underline">Shipping & Returns</li>
              <li className="cursor-pointer hover:underline">Terms & Conditions</li>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold text-white mb-4">Learn more</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Join as a Seller</li>
              <li className="cursor-pointer hover:underline">Affiliate Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
