"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"
const images = [
  "/herosection/11.webp",
  "/herosection/12.webp",
  "/herosection/13.webp",
  "/herosection/14.webp",
  "/herosection/15.webp",
  "/herosection/16.webp",

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
   <section id="home" className=" pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative space" >
  <div className="pad pt-7 sm:pt-16 lg:pt-20 mx-auto w-full h-full">
    <div className=" md:block scale-95  relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className=" cursor-pointer"
              />
           <div className="hero-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
             
             
          
           <div className="mt-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
  <p className="max-w-2xl mb-2 font-light text-white textsize1  lg:mb-2  dark:text-gray-400">Welcome to</p>   
            <h1 className="max-w-2xl mb-2 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-8xl text-white dark:text-white">Atoms Group</h1>
            <p className="max-w-2xl mb-4 font-light text-white textsize lg:mb-6  dark:text-gray-400">Creating changemakers who inspire...</p>
           
        </div>
              
    </div>
              <div className="mt-8">
               
               

               
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="block md:hidden scale-95 rounded-lg pt-6 relative">
     
    </div>
  </div>
</section>




















<section style={{ marginTop:"-7rem" }}>

<div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 p-10 xl:-mt-30 ">
<div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 hover:text-white text-black transition-all duration-100 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
    <div
        className="p-3 rounded-full  text-blue-500 bg-blue-100 dark:text-orange-100  dark:bg-orange-500 mr-4"
      >
        <img src="./images/shape/stat1.png"  className="w-5 h-5" alt=""/>
         
        
      </div>
      <div>
        <p className="mb-2 text-sm font-medium  dark:text-gray-400">
          Clients
        </p>
        <p className="text-lg font-semibold  dark:text-gray-200"> 30+</p>
      </div>
    </div>
  </div>
  <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 hover:text-white text-black transition-all duration-100 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
    <div
        className="p-3 rounded-full  text-blue-500 bg-blue-100 dark:text-orange-100  dark:bg-orange-500 mr-4"
      >
        <img src="./images/shape/stat2.png"  className="w-5 h-5" alt=""/>
         
        
      </div>
      <div>
        <p className="mb-2 text-sm font-medium  dark:text-gray-400">
         Team
        </p>
        <p className="text-lg font-semibold  dark:text-gray-200"> 20+</p>
      </div>
    </div>
  </div>
   <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 hover:text-white text-black transition-all duration-100 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
    <div
        className="p-3 rounded-full  text-blue-500 bg-blue-100 dark:text-orange-100  dark:bg-orange-500 mr-4"
      >
        <img src="./images/shape/stat3.png"  className="w-5 h-5" alt=""/>
         
        
      </div>
      <div>
        <p className="mb-2 text-sm font-medium  dark:text-gray-400">
          Projects
        </p>
        <p className="text-lg font-semibold  dark:text-gray-200">10</p>
      </div>
    </div>
  </div>
  <div className="min-w-0 rounded-full overflow-hidden shadow-md bg-white hover:bg-gradient-to-br hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 hover:text-white text-black transition-all duration-100 relative group border-2 border-gray-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
    <div
        className="p-3 rounded-full  text-blue-500 bg-blue-100 dark:text-orange-100  dark:bg-orange-500 mr-4"
      >
        <img src="./images/shape/stat4.png"  className="w-5 h-5" alt=""/>
         
        
      </div>
      <div>
        <p className="mb-2 text-sm font-medium  dark:text-gray-400">
          Impressions
        </p>
        <p className="text-lg font-semibold  dark:text-gray-200"> 31,83,180+</p>
      </div>
    </div>
  </div>
</div>
</section>

 





    </>
  );
};

export default Hero;
