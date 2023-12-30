 import React from "react";
 import {motion} from "framer-motion"
const About1 = () => {
   return (
   <>


<section id="About" className="overflow-hidden  pb-20 lg:pt-[10px] lg:pb-[90px] bg-white dark:bg-dark px-10">
<div className="container mx-auto">
  <div className="flex flex-wrap items-center justify-between -mx-4">
  

    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
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
transition={{ duration: 1, delay: 1.5 }}

className="animate_top "
><h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
<span className="text-content">Atoms Group</span>
</h2></motion.div></div>
<div>       
      
<p>
Atoms Group of companies were formed with the goal of creating inspiring change makers who make a significant impact on the global economy. Currently, we are actively involved in the education, digital technologies, and hospitality services sectors, with a strong dedication to solving industry challenges through creative solutions. Our main focus is on cultivating imaginative and inspiring leaders who can drive positive transformations within each of these fields.

</p>

<div className="mt-5">
      <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
      Our Vision
        
      </h2>
      </div>
<div className=" flex items-center gap-5">
    
        <div className=" mt-2">
        
          <p> To cultivate visionary leaders who, in turn, inspire and create impactful leaders on a global scale.
</p>
        </div>
      </div>
      <div className="mt-5">
      <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
      Our Mission
        
      </h2>
      </div>
<div className=" flex items-center gap-5">
    
        <div className=" mt-2">
        
          <p> Fueled by visionary leadership, we drive impactful change in education, technology, and hospitality, empowering individuals through mentorship and innovation to solve industry challenges globally.</p>
        </div>
      </div>
     
      
           </div>
      </div>
    </div>
    <div className="w-full px-4 lg:w-6/12">
      <div className="flex items-center -mx-3 sm:-mx-4">
     
          <video
className="object-contain rounded-3xl w-full"
height="600"
width="778"
src="./images/about/about3.webm"
autoPlay
muted
loop
/>
          
       
        <div className="w-full px-3 sm:px-4 xl:w-1/2">
            
          <div className="relative py-3 ">
          
           
          </div>
         
          <div className="relative py-3 ">
            
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
</section>
  </>
     );
   };
export default About1;