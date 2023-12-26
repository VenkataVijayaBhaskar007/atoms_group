import React from "react";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden  pb-20 lg:pt-[10px] lg:pb-[90px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}> <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms Group</span>
</h2></div>
      <div>       
              
    <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
   
    <div className="mt-5">
              <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Vision
                
              </h2>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className="w-3/4 mt-2">
                  <h3 className="mb-0.5 text-metatitle2 text-black hover:text-blue-600 dark:text-white">
                    Achieving greater heights is not so farther
                  </h3>
                  <p>ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. </p>
                </div>
              </div>
             
              
             
                   </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    
                    <img
                      src="./images/about/long.svg"
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
                      src="./images/about/short1.svg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <div className="gradient-overlay-about " ></div>
            
                  </div>
               
                  <div className="relative py-3 ">
                    <img
                      src="./images/about/short2.svg"
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
