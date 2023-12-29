import React from "react";

const About1 = () => {
  return (
    <>
      <section id="About" className="overflow-hidden  pb-20 lg:pt-[10px] lg:pb-[90px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}> <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Group</span>
</h2></div>
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
            
                <div className="w-3/4 mt-2">
                 
                  <p>
                 
                  To cultivate visionary leaders who, in turn, inspire and create impactful leaders on a global scale.</p>
                </div>
              </div>

              <div className="mt-5">
              <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Mission
                
              </h2>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className="w-3/4 mt-2">
                 
                  <p>
                 
                  To cultivate visionary leaders who, in turn, inspire and create impactful leaders on a global scale.</p>
                </div>
              </div>
             
              <div className=" flex  flexshape md:flex-column">


  <a href="/aboutus"
    className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
  >
   Knowmore
  </a>

</div>
             
                   </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    
                    <img
                      src="./images/about/long.webp"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                      <div className="gradient-overlay-about1 " ></div>
                      
                    <span className="absolute  -bottom-15 -left-15 z-[-1]" >
                    <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    {/* Defining the diagonal linear gradient */}
    <linearGradient id="myGradient" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="10%" stopColor="#2E71C3" />
      <stop offset="90%" stopColor="#42ffff" />
    </linearGradient>
  </defs>

  {/* Drawing a circle with the defined diagonal linear gradient and reduced opacity */}
  <circle cx="75" cy="75" r="70" fill="url('#myGradient')" opacity="0.5" />
</svg>
                    </span>
             

                  
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    
                  <div className="relative py-3 ">
                    
                  <img
                      src="./images/about/short1.webp"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <div className="gradient-overlay-about " ></div>
            
                  </div>
               
                  <div className="relative py-3 ">
                    <img
                      src="./images/about/short2.webp"
                      alt=""
                      className="w-full  rounded-2xl "
                    />
                      <div className="gradient-overlay-about " ></div>
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
