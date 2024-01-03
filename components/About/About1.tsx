 import React from "react";
 import {motion} from "framer-motion"
const About1 = () => {
   return (
   <>


<section id="About" className="overflow-hidden  xl:pb-20 lg:pt-[10px]  bg-white dark:bg-dark px-10">
<div className="container mx-auto">
  <div className="flex flex-wrap items-center justify-between -mx-4">
  

    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
      <div className="mt-1">
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
><h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
<span className="text-content">Atoms Group</span>
</h2></motion.div></div>
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
transition={{ duration: 1, delay: 0.4 }}

className="animate_top "
>     
<p>
Atoms Group of companies were formed with the goal of creating inspiring change makers who make a significant impact on the global economy. Currently, we are actively involved in the education, digital technologies, and hospitality services sectors, with a strong dedication to solving industry challenges through creative solutions. Our main focus is on cultivating imaginative and inspiring leaders who can drive positive transformations within each of these fields.

</p>
</motion.div>

<div className="mt-5">
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

className="animate_top "
>
      <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
      Our Vision
        
      </h2>
      </motion.div>
      </div>
<div className=" flex items-center gap-5">
    
        <div className=" mt-2">
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
transition={{ duration: 1, delay: 0.7 }}

className="animate_top "
>
          <p> To cultivate visionary leaders who, in turn, inspire and create impactful leaders on a global scale.
</p></motion.div>
        </div>
      </div>
      <div className="mt-5">
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
transition={{ duration: 1, delay: 0.9 }}

className="animate_top "
>   <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
      Our Mission
        
      </h2></motion.div>
      </div>
<div className=" flex items-center gap-5">
    
        <div className=" mt-2">
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
transition={{ duration: 1, delay: 1.5 }}

className="animate_top "
>  
          <p> Fueled by visionary leadership, we drive impactful change in education, technology, and hospitality, empowering individuals through mentorship and innovation to solve industry challenges globally.</p>
     </motion.div>   </div>
      </div>
      <div className="mt-5 mb-6">
      <a href="/aboutus"
    className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
  >
   About US
  </a></div>
      
           </div>
      </div>
    </div>
    <div className="w-full px-4 lg:w-6/12">
      <div className="flex items-center -mx-3 sm:-mx-4">
     
          <video
className="object-contain rounded-3xl w-full"
height="600"
width="778"
src="./images/about/about.mp4"
autoPlay
muted
loop
/>
          
       
        
       
      </div>
    </div>
  </div>
</div>
</section>

<section className="lg:mt-8">

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
export default About1;