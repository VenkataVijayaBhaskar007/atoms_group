import { Metadata } from "next";
import Link from "next/link";
import "./style.css";

export const metadata: Metadata = {
  title: "Atoms Group",
  description: "This is About Us",
};

const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="bg-white relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
          <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
            <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-2xl text-center sm:text-5xl md:text-4xl lg:w-auto lg:text-left xl:text-5xl   dark:text-white">Transforming vision into <br className="lg:block hidden"/><span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Reality.</span>.</h1>
            <div className="lg:flex">
              <div className="relative mt-6 md:mt-8 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                Empowering the world with innovative solutions 
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">Our business verticles</span>
                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
   
    <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
        <div className="flex justify-center space-x-4">
            <img className="" src="./images/logo/digital.jpg" alt="slack logo" loading="lazy" width="128" height="128"/>
            <span className="hidden font-medium md:block dark:text-white"></span>
        </div>
    </a>

  
    <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
        <div className="flex justify-center space-x-4">
            <img className="" src="./images/logo/education.jpg" alt="slack logo" loading="lazy" width="128" height="128"/>
            <span className="hidden font-medium md:block dark:text-white"></span>
        </div>
    </a>

    <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
        <div className="flex justify-center space-x-4">
            <img className="" src="./images/logo/2.O.jpg" alt="slack logo" loading="lazy" width="128" height="128"/>
            <span className="hidden font-medium md:block dark:text-white"></span>
        </div>
    </a>
</div>

                <div className="dark:text-gray-300">
                <span>contact us</span> 
                  <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Mail</a>
                  <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">pn no</a>
                </div>
                
              </div>
              <div className="mt-12 xl:mt-[-15rem] md:mt-0 lg:absolute -right-10 lg:w-7/12" >
                <div className="relative w-full">
                  {/* <div aria-hidden="true" className="mt-20 absolute scale-75 md:scale-110 inset-0 m-auto mr-60 w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl z-[0]"></div> */}
                  {/* <video className="mt-20 mr-60 h-100 w-100 rounded-lg absolute right-0" controls autoPlay muted loop>
  <source src="./images/about/about.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
                </div>
              </div>
              <div className="your-selector lg:absolute -right-10 lg:w-7/12">
                    <div className="relative w-full">
                        <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                        <video src="./images/about/about.webm" className="relative"   width="600" height="180" controls autoPlay muted loop style={{marginTop:"-16rem",marginLeft:"8rem" }}></video>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
