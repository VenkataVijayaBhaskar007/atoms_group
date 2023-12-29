import { Metadata } from "next";
import Link from "next/link";
import "./style.css";

export const metadata: Metadata = {
  title: "Atoms Group About US",
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
                <div className="grid grid-cols-2 sm:grid-cols-3  mb-4">
  <a href="/aboutus" className="button-style">
    <div><img className="w-auto h-8.5 mb-4 " src="./images/about/education.png" alt="Education" /></div>
  </a>

  <a href="/aboutus" className="button-style">
    <div><img className="w-auto h-8" src="./images/about/digital.png" alt="Digital" /></div>
  </a>

  <a href="/aboutus" className="button-style">
    <div><img className="w-40 h-6" src="./images/about/2.0.png" alt="2.0" /></div>
  </a>
</div>



              </div>
              
            
              <div className="your-selector lg:absolute -right-10 lg:w-7/12">
                    <div className="relative w-full">
                        <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r f blur-3xl"></div>
                        <video src="./images/about/about.mp4" className="relative kidsmargin xl:ml-30 ml-0"   width="600" height="180"  autoPlay muted loop style={{marginTop:"-16rem",marginRight:"-2rem" }}></video>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
     
<section className="bg-white dark:bg-gray-900">
    <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-12">
       
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">This is detailed about us</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">here</p>
       </div>
 
  
  </section>











  


<section className="px-10 mb-15">
  <div className="grid gap-y-6 md:gap-y-0 md:gap-x-15 grid-cols-12 items-center">
  <div className="hidden lg:block col-span-1 order-1"></div>
  <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-2">
  <div className="prose">
            <h3 className="text-2xl  text-black font-regular">AI helps build your project quicker and more cost-effectively</h3>
            <p className="mt-4">AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features ...AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features ...
            </p>
            
        </div></div><div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-3">
        <video

  height="600"
  width="778"
  src="./images/about/about1.mp4" 

  sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 38vw, (max-width: 1279px) 31vw, (max-width: 1439px) 30vw, (max-width: 1919px) 29vw, 23vw"
  class="object-contain rounded-3xl"
  autoPlay muted loop
/>

</div>
<div className="hidden lg:block col-span-1 order-4">
  </div>
  </div>
  </section>
  <section className="px-10 mb-15">
  <div className="grid gap-y-6 md:gap-y-0 md:gap-x-15 grid-cols-12 items-center">
    <div className="hidden lg:block col-span-1 order-1"></div>
    
    <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-3">
        <div className="prose">
            <h3 className="text-2xl  text-black font-regular">AI helps build your project quicker and more cost-effectively</h3>
            <p className="mt-4">AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features ...AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features ...
            </p>
            
        </div>
    </div>
    
    <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-2">
    <video

height="600"
width="778"
src="./images/about/about2.mp4" 

sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 38vw, (max-width: 1279px) 31vw, (max-width: 1439px) 30vw, (max-width: 1919px) 29vw, 23vw"
class="object-contain rounded-3xl"
autoPlay muted loop
/>
    </div>
    
    <div className="hidden lg:block col-span-1 order-4"></div>
</div>
</section>
<section className="px-10 mb-15">
  
<section>
  <div className="grid gap-y-6 md:gap-y-0 md:gap-x-15 grid-cols-12 items-center">
  <div className="hidden lg:block col-span-1 order-1"></div>
  <div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-2">
  <div className="prose">
            <h3 className="text-2xl  text-black font-regular">AI helps build your project quicker and more cost-effectively</h3>
            <p className="mt-4">AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features ...AI fits reusable features together based on a template you choose so our developers can focus on creating the custom features only your business needs. AI also calculates a price based on the features ...
            </p>
            
        </div></div><div className="col-span-12 md:col-span-6 lg:col-span-5 md:order-3">
        <video

height="600"
width="778"
src="./images/about/about3.mp4" 

sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 38vw, (max-width: 1279px) 31vw, (max-width: 1439px) 30vw, (max-width: 1919px) 29vw, 23vw"
class="object-contain rounded-3xl"
autoPlay muted loop
/>
</div>
<div className="hidden lg:block col-span-1 order-4">
  </div>
  </div>
  </section>
</section>
 
 

    </>
  );
};

export default AboutUs;
