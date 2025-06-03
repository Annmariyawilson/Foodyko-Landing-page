import React from "react";

function Banner1() {
  return (
    <div>
      {/* Enhanced Mobile Banner */}
      <div className="sm:hidden bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-5 text-center rounded-lg shadow-sm mx-4 my-6">
        <div className="max-w-xs mx-auto flex flex-col items-center">
          {/* Tagline */}
          <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Eat Better, Live Smarter
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
            <span className="whitespace-nowrap">Discover Quality Food</span>
            <br />
            with <span className="text-red-600">Foodyko</span>
          </h2>{" "}

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed px-2">
            Bringing better food to your table—by uniting local producers and
            smart technology for a fresher, fairer future.
          </p>
          {/* CTA Button */}
          <div className="w-full max-w-[240px]">
            <a
              href="https://forms.gle/ciR2g4hiBhKMGXXX6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Join Our Journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </a>
          </div>
          {/* Trust Indicators */}
          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center bg-white/50 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4 text-green-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs text-gray-600">100% Pure & Trusted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden sm:block container mx-auto px-4 md:px-0">
        <img
          src="src/assets/mater/Banner-bgimg.jpeg"
          alt="Foodyko Banner"
          className="w-full h-auto rounded-sm object-cover min-h-[300px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-6 md:py-10">
          <h4 className="text-sm md:text-lg lg:text-xl mb-2 text-gray-100">
            Eat Better, Live Smarter
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 font-bold text-white">
            Discover Quality Food with Foodyko
          </h2>
          <p className="mb-6 text-gray-100 text-base md:text-lg max-w-2xl mx-auto px-4">
            Bringing better food to your table—by uniting local producers and
            smart technology for a fresher, fairer future.
          </p>
          <a
            href="https://forms.gle/ciR2g4hiBhKMGXXX6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-white bg-transparent hover:bg-white text-white hover:text-black font-medium px-8 py-2 md:px-10 md:py-3 transition-all duration-300 text-sm md:text-base">
              Join Our Journey
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
