import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import products from "../products";
import img from "./assets/green_banner-removebg.png";
import vegIcon from "./assets/mater/veg-icon.jpg";

const Carousel = () => {
  return (
    <div className="bg-gradient-to-r from-[#3A5A3A] to-[#7B9E4E] py-6 md:py-10">
      <div className="bg-gradient-to-r from-[#3A5A3A] to-[#7B9E4E] py-4">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-1/2 space-y-2 text-center md:text-left">
            <h2 className="text-white text-xs sm:text-sm md:text-lg font-medium tracking-wide">
              Try It First, Love It Forever
            </h2>
            <h1 className="text-white text-lg sm:text-xl md:text-3xl font-extrabold leading-snug">
              Redeem Trial Points for Free Sample Packs.
            </h1>
            <p className="text-white text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto md:mx-0">
              Not sure what to buy? Start with a taste! Order sample packs and
              find your new favorites.
            </p>
            <button className="mt-2 border border-white text-white font-semibold px-4 py-3 text-lg sm:text-sm rounded-md hover:bg-white hover:text-green-700 transition">
              Start Tasting Today
            </button>
          </div>

          <img
            src={img}
            alt="Green Banner"
            className="w-full max-w-[250px] sm:max-w-[360px] md:max-w-[400px] object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={8}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={1200}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 2.5, spaceBetween: 16 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper pb-6"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-full sm:w-[340px] md:w-[360px] flex flex-col mx-auto">
                {product.badge && (
                  <span className="absolute top-2 left-5 bg-gray-100 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                    {product.badge}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
                />

                <div className="bg-white p-3 shadow-md rounded-b-lg flex flex-col flex-grow">
                  <div className="flex items-center justify-between">
                    <p className="text-red-500 text-xs sm:text-sm md:text-base">
                      {product.category}
                    </p>
                    <img src={vegIcon} className="w-3 sm:w-4" alt="veg-icon" />
                  </div>

                  <div className="flex justify-between items-start mt-1 min-h-[40px]">
                    <h3 className="text-xs sm:text-sm md:text-base line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base whitespace-nowrap">
                      {product.weight}
                    </p>
                  </div>

                  <p className="text-black text-xs sm:text-sm md:text-base font-semibold mt-1">
                    {product.points} Trial Points
                  </p>

                  <div className="flex justify-between mt-3">
                    <button className="text-gray-500 border border-gray-400 px-3 sm:px-5 py-2 text-xs sm:text-sm hover:border-black rounded-md">
                      Wishlist
                    </button>
                    <button className="bg-red-700 text-white px-8 sm:px-6 py-2 text-xs sm:text-sm rounded-md hover:bg-red-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
