"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"
const images = [
  "/herosection/11.png",
  "/herosection/12.png",
  "/herosection/13.png",
  "/herosection/14.png",
  "/herosection/15.png",
  "/herosection/16.png",

];


const mobileImages = [
  "/herosection/mobile/11.png",
  "/herosection/mobile/12.png",
  "/herosection/mobile/13.png",
  "/herosection/mobile/14.png",
  "/herosection/mobile/15.png",
  "/herosection/mobile/16.png",
  
];
const Hero = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
  };

  return (
    <>
   <section id="home" className=" pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative" >
  <div className="pt-7 sm:pt-16 lg:pt-20 mx-auto w-full h-full">
    <div className=" md:block scale-95 rounded-lg relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className="rounded-lg cursor-pointer"
              />
           <div className="hero-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
              <h4 className="mb-6 heading-small text-xl font-medium text-white dark:text-white" >
                 Welcome to
              </h4>
              <h1 className=" text-4xl font-bold pr-16 heading-text  text-white dark:text-white xl:text-hero hover:translate-y-[-18px]" style={{ marginBottom:"-15px" }}>
              Atoms Group
              </h1>
              <div className="text-xl">   
              <p className="mt-8 w-1/2 text-white font-regular">
              Atoms Group is committed to providing affordable and impressive Group+ services for people from all social backgrounds.
              </p>
              </div>
              <div className="mt-8">
                {/* <form onSubmit={handleSubmit}> */}
                  {/* <div className="flex flex-wrap gap-5"> */}
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    {/* <button
                      aria-label="get started button"
                      className="flex rounded-full bg-purple-600 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-purple-600 dark:hover:bg-blackho hover:translate-y-[-5px]"
                    >
                      Our Projects
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-gray-100  px-7.5 py-2.5 text-black  dark:text-white hover:text-white duration-300 ease-in-out hover:bg-purple-600 dark:bg-btndark dark:hover:bg-purple-600 hover:translate-y-[-5px]"
                    >
                      Our Team
                    </button>
                  </div> */}
               

               
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="block md:hidden scale-95 rounded-lg pt-6 relative">
      <Slider {...settings} arrows={false} className="">
        {mobileImages.map((image, index) => {
          return (
            <div key={index} className="px-2 relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className="rounded-lg"
              />
            
            </div>
          );
        })}
      </Slider>
    </div>
  </div>
</section>















      {/* <section>   <Image
                  src="/images/shape/shape-01.svg"
                  alt="shape"
                  width={200}
                  height={200}
                  className="absolute -left-0 bottom-90"
                  
                /></section> */}




{/* 
<section>

<div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 p-10 xl:-mt-30">
  <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
      <div
        className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
          ></path>
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Clients
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        30+
        </p>
      </div>
    </div>
  </div>
 <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
      <div
        className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
          <path
            fill-rule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Team
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          15+
        </p>
      </div>
    </div>
   </div>
  <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
      <div
        className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          ></path>
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Projects
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          10
        </p>
      </div>
    </div>
  </div>
  <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
      <div
        className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
          <path
            fill-rule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Industry Expertise
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">5+ years</p>
      </div>
    </div>
  </div>
</div>
</section>

 */}





    </>
  );
};

export default Hero;
