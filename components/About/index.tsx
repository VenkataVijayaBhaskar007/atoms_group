"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import "./style.css";
import About1 from "./About1"
import Gallery from "./Gallery"
const About : React.FC = () => {
  useEffect(() => {
    const logosContainer = document.getElementById('logos-container');
    const logosSlide = document.getElementById('logos-slide');

    if (logosContainer && logosSlide) {
      // Clone logos to create a seamless loop
      const originalLogos = logosSlide.innerHTML;
      logosSlide.innerHTML += originalLogos;
     

      // Start the animation
      const handleMouseEnter = () => {
        if (logosSlide.style) {
          logosSlide.style.animationPlayState = 'pause';
        }
      };

      // Pause the animation on hover
      const handleMouseLeave = () => {
        if (logosSlide.style) {
          logosSlide.style.animationPlayState = 'running';
        }
      };

      logosContainer.addEventListener('mouseenter', handleMouseEnter);
      logosContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        // Cleanup event listeners on component unmount
        logosContainer.removeEventListener('mouseenter', handleMouseEnter);
        logosContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []); 

  
  return (
    <>
    
      

<section className="-pt-30 "><About1/></section>

      
            




































    



<section className="overflow-hidden   lg:pt-[8px] lg:pb-[10px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 ">
              <div className=" mt-2 ">
             <div style={{marginLeft:"-8px"}}> <motion.div
variants={{
hidden: {
opacity: 0,
y: -40,
},
visible: {
opacity: 1,
y: 0,
},
}}
initial="hidden"
whileInView="visible"
transition={{ duration: 1, delay: 0.1 }}

className="animate_top "
><h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Companies</span>
</h2></motion.div>
</div>
      <div>       
      <motion.div
variants={{
hidden: {
opacity: 0,
x: -40,
},
visible: {
opacity: 1,
x: 0,
},
}}
initial="hidden"
whileInView="visible"
transition={{ duration: 1, delay: 0.5 }}

className="animate_top "
>          
      <p>
      As a dynamic consortium, Atoms Group unites a constellation of companies, each specializing in distinct domains to offer unparalleled services to our valued clients. Atoms Education is our beacon in inspiring global learning, providing innovative courses to students, educators, and institutions. Meanwhile, Atoms Digital Solutions pioneers distinctive digital experiences, excelling in marketing, web/app development, software design, and photography. Complementing these, MJ Saloon, under our umbrella, is a haven of style and grooming. Our commitment is to infuse lifelong learning, innovative digital experiences, and exceptional salon services into the fabric of our client interactions.
    </p>
    </motion.div>
                   </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>






























<section id="companies" className="container mx-auto ">
  
    {/* First Card */}
    <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -40,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      ><div className="flex flex-wrap justify-center">
    <a href="https://education.atomsgroup.net/" className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="./images/about/26.webp"
          alt="card image"
        />
        {/* Unique Shape Overlay 
        <div className="absolute inset-0 bg-teal-500 opacity-10"></div>*/}

      </div>
      <div className="p-6 relative z-10">
      <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Education</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to ...
        </p>
        <a
          href="https://education.atomsgroup.net/"
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </a>
    
   {/* 2 Card */}
   <a href="https://atomsdigitalsolutions.atomsgroup.net/" className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="./images/about/27.webp"
          alt="card image"
        />
        {/* Unique Shape Overlay 
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50"></div>
     */}
      </div>
      <div className="p-6 relative z-10">
      <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Digital Solutions</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        Atoms Group is committed to providing affordable and impressive Group services for people social backgrounds. Our current projects include a private hostel offering ...
        </p>
        <a
          href="https://atomsdigitalsolutions.atomsgroup.net/"
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </a>
     {/* 3 Card */}
     <a href="https://atoms2.0.atomsgroup.net/" className="max-w-sm mx-4 my-4 overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="./images/about/28.webp"
          alt="card image"
        />
        {/* Unique Shape Overlay 
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20"></div>*/}
      </div>
      <div className="p-6 relative z-10">
        <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms 2.O</h2>
        <p className="text-base text-gray-600 dark:text-gray-300">
        Atoms Group is committed to providing affordable and impressive Group services for people social backgrounds. Our current projects include a private hostel offering ...
        </p>
        <a
          href="https://atoms2.0.atomsgroup.net/"
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Learn more</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>


      </div>
    </a>


  </div>
  </motion.div>
</section>


<section id="Insights" className="overflow-hidden   lg:pt-[15px] lg:pb-[30px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 ">
              <div className="mt-10 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}>
             <motion.div
variants={{
hidden: {
opacity: 0,
y: -40,
},
visible: {
opacity: 1,
y: 0,
},
}}
initial="hidden"
whileInView="visible"
transition={{ duration: 1, delay: 0.1 }}

className="animate_top "
> <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Insights</span>
</h2></motion.div>
</div>
      <div>       
      <motion.div
variants={{
hidden: {
opacity: 0,
x: -40,
},
visible: {
opacity: 1,
x: 0,
},
}}
initial="hidden"
whileInView="visible"
transition={{ duration: 1, delay: 0.6 }}

className="animate_top "
>           
      <p>
      Welcome to the Atoms Group Gallery, where we showcase a convergence of innovation in education, dynamic digital solutions, and hospitality excellence. Each snapshot encapsulates our unwavering commitment to seamless excellence, exemplifying a harmonious blend across a spectrum of diverse endeavors.
      </p>
      </motion.div>
                   </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


<Gallery/>

{/*teams section starts*/}
<section id="Team" className="overflow-hidden   lg:pt-20 lg:pb-[30px]  bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 ">
              <div className="mt-10 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}>
             <motion.div
variants={{
hidden: {
opacity: 0,
y: -40,
},
visible: {
opacity: 1,
y: 0,
},
}}
initial="hidden"
whileInView="visible"
transition={{ duration: 1, delay: 0.1 }}

className="animate_top "
> <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Our Team</span>
</h2>
</motion.div>
</div>
      <div>       
      <motion.div
variants={{
hidden: {
opacity: 0,
x: -40,
},
visible: {
opacity: 1,
x: 0,
},
}}
initial="hidden"
whileInView="visible"
transition={{ duration: 1, delay: 0.5 }}

className="animate_top "
> 
      <p className="mb-10">
      Our dedicated team forms a harmonious blend of talent, creativity, and expertise, each member contributing to our shared vision of excellence. Explore the faces behind our success and get to know the individuals shaping the dynamic future of Atoms Group.
    </p>
           </motion.div>        </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



{/* teams section end */}




<section className="flex flex-wrap justify-center items-center "> 

        {/* Card 1 */}
      <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/17.webp"
              alt=""
            />
             <div className="hide">
            <h3>Ayyappa Siginam</h3>
            <p>Chairman & Director</p></div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:ayyappaatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/siginam-ayyappa-663b5619a
" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/ayyappa_siginam?igshid=MmU2YjMzNjRlOQ==
" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Ayyappa Siginam</h3>
            <p>Chairman & Director</p> 
            {/* Social links for Card 1 */}
          <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:ayyappaatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/siginam-ayyappa-663b5619a
" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/ayyappa_siginam?igshid=MmU2YjMzNjRlOQ==
" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 

        {/* Card 2 */}
   <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/18.webp"
              alt=""
            />
                      <div className="hide" style={{whiteSpace:"nowrap"}}>
            <h3>Naga Sai Sravanth Singamsetty</h3>
            <p>CEO & Director</p> </div>
            <ul className="flex justify-start items-center mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:sravanthatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/naga-sai-sravanth-singamsetty/" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/sns_sravanth/" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Naga Sai Sravanth Singamsetty</h3>
            <p>CEO & Director</p> 
            {/* Social links for Card 1 */}
        <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:sravanthatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/naga-sai-sravanth-singamsetty/" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/sns_sravanth/" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 

        {/* Card 3 */}
       <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/19.webp"
              alt=""
            />
            <div className="hide">
            <h3>Shaik Khajipur Azaruddin</h3>
            <p>CMO & Director</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:azaruddin.atoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/shaik-khajipur-azaruddin-0705a4197" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/azaruddinkhajipur?igshid=MzRlODBiNWFlZA==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Shaik Khajipur Azaruddin</h3>
            <p>CMO & Director</p> 
            {/* Social links for Card 1 */}
           <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:azaruddin.atoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/shaik-khajipur-azaruddin-0705a4197" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/azaruddinkhajipur?igshid=MzRlODBiNWFlZA==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 

        {/* Card 4 */}
        <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/5.webp"
              alt=""
            />
             <div className="hide">
            <h3>Prudhvi Pachipulusu</h3>
            <p>Director</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:prudhvipachipulusuatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/prudhvi-pachipulusu-959208213" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/prudhvi_pachipulusu?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Prudhvi Pachipulusu</h3>
            <p>Director</p> 
            {/* Social links for Card 1 */}
         <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:prudhvipachipulusuatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/prudhvi-pachipulusu-959208213" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/prudhvi_pachipulusu?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 
        {/*bottom section */}
        {/*card 5 */}
       <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/6.webp"
              alt=""
            />
             <div className="hide" style={{whiteSpace:"nowrap"}}>
            <h3>Tirumala Sai Ganesh Babu Battula</h3>
            <p>Director & Lead of Acumen Club</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:saiganeshatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/ganesh-battula-4ba587225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/__gani___09?igsh=MTRsMnF1MGs5amx6OA==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Tirumala Sai Ganesh Babu Battula</h3>
            <p>Director & Lead of Acumen Club</p> 
            {/* Social links for Card 1 */}
            <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:saiganeshatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/ganesh-battula-4ba587225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/__gani___09?igsh=MTRsMnF1MGs5amx6OA==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div>
         {/*card 6 */}
          <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/22.webp"
              alt=""
            />
             <div className="hide" style={{whiteSpace:"nowrap"}}>
            <h3>Sravan Kumar Reddy Nune
            </h3>
            <p>Director & Lead of Engineer's Scoops</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:sravanatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/sravan-kumar-reddy-98396a192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/sravan_atoms?igsh=ODA1NTc5OTg5Nw==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Sravan Kumar Reddy Nune
            </h3>
            <p>Director & Lead of Engineer's Scoops</p> 
            {/* Social links for Card 1 */}
             <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:sravanatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/sravan-kumar-reddy-98396a192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/sravan_atoms?igsh=ODA1NTc5OTg5Nw==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div>
         {/*card 7 */}
          <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/8.webp"
              alt=""
            />
              <div className="hide">
            <h3>Durga Prasad Goli</h3>
            <p>Director & Lead of Visual Media</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:atomsdurga@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/valaparla-valaparla-168b9b285" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/durga_goli?igshid=MzNlNGNkZWQ4Mg==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Durga Prasad Goli</h3>
            <p>Director & Lead of Visual Media</p> 
            {/* Social links for Card 1 */}
             <ul className="flex mb-4 md:order-1  md:mb-0 ">
  <li className="ml-4">
    <Link href="mailto:atomsdurga@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/valaparla-valaparla-168b9b285" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://instagram.com/durga_goli?igshid=MzNlNGNkZWQ4Mg==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div> 
         {/*card 8 */}
         <div className="profile-card  profile-card1 mb-8">
          <div className="img">
            <img
              src="./images/atomsgallery/9.webp"
              alt=""
             
            />
            <div className="hide" style={{whiteSpace:"nowrap"}}>
             <h3>Naga Sai Durgesh Singamsetty</h3>
            <p>Lead of Digital Marketing Services</p> </div>
            <ul className="flex mb-4 hide-social md:order-1  md:mb-0 hide">
  <li className="ml-15">
    <Link href="mailto:Durgeshatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-5 h-5 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/naga-sai-durgesh-singamsetty-976a71224/" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/nagasaidurgesh?igsh=MWczbm1kYWk0cGl2eQ==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
          <div className="caption">
            <h3>Naga Sai Durgesh Singamsetty</h3>
            <p>Director & Digital Marketing Associate</p> 
            {/* Social links for Card 1 */}
             <ul className="flex mb-4 md:order-1  md:mb-0">
  <li className="ml-4">
    <Link href="mailto:Durgeshatoms@gmail.com" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-black rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="-2.5 0 13 7" xmlns="http://www.w3.org/2000/svg">
        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.linkedin.com/in/naga-sai-durgesh-singamsetty-976a71224/" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-blue-900 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Linkedin">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
      </svg>
    </Link>
  </li>

  <li className="ml-4">
    <Link href="https://www.instagram.com/nagasaidurgesh?igsh=MWczbm1kYWk0cGl2eQ==" className="flex justify-center items-center text-white bg-sky-400 hover:text-gray-100 hover:bg-pink-600 rounded-full hover:translate-y-[-1px] hover:scale-100" aria-label="Instagram">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.145" cy="11.892" r="1" />
        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
      </svg>
    </Link>
  </li>
</ul>
          </div>
        </div>

    </section> 
 







 








    </>
  );
};

export default About;
