import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import bannerImg from "../assets/bannerr.jpeg";

const faqs = [
  {
    question: "How can I get in touch for more details about your products?",
    answer:
      "You can reach us by filling out the contact form on our website, calling our customer support at +91 70122 96606, or emailing us at contact@foodyko.com. We're here to assist you with any inquiries!",
  },
  {
    question: "How can I become a seller on Foodyko?",
    answer:
      "Visit our 'Website'  and fill out the registration form to get started",
  },
  {
    question: "What kind of products can I sell?",
    answer:
      "Foodyko is a platform dedicated entirely to food items, allowing the sale of a wide variety of food products, including vegetables, meat, fish, sweets, snacks, and beverages.",
  },
  {
    question: "Do you offer subscription plans for regular customers?",
    answer:
      "Yes, we offer flexible subscription plans with exclusive benefits and discounts",
  },
  {
    question: "How do I handle shipping?",
    answer:
      "Foodyko has shipping partners and will handle your products entirely from shipping points.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <div className="bg-white px-6 py-16 md:px-20 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full items-center text-left"
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <span className="text-red-500">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>
              {openIndex === index && faq.answer && (
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-[#fef0cc] px-4 md:px-16 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        {/* Left Image - Chips - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block order-1 md:order-none flex-shrink-0 w-40 md:w-56 lg:w-64">
          <img
            src="src/assets/mater/removebg2.png"
            alt="Potato Chips"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="order-3 md:order-none text-center max-w-md mx-auto md:mx-0 md:flex-1 px-4">
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-4">
            We're here to help! Feel free to reach out to us for any inquiries
            or assistance.
          </p>
          <a
            href="https://wa.me/917012296606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:py-3 rounded-md transition-colors"
          >
            Let's Connect
          </a>
        </div>

        {/* Right Image - Food Products */}
        <div className="order-2 md:order-none flex-shrink-0 w-40 md:w-56 lg:w-64">
          <img
            src="src/assets/mater/removebg1.png"
            alt="Foodyko Products"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
