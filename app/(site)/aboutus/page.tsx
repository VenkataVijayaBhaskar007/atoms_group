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
                        <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r f blur-3xl"></div>
                        <video src="./images/about/about.mp4" className="relative  xl:ml-30 ml-30"   width="600" height="180" controls autoPlay muted loop style={{marginTop:"-16rem" }}></video>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
     
<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We love our creators</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
       </div>
      
<div className="p-4 text-gray-600">
	<h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">Vision</h1>

	<ul className="grid place-content-center sm:grid-cols-2 gap-8">
		<li className="flex">
		
			<div>
				<div className="text-xl font-bold text-indigo-800">Research</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We love numbers! We collect data and insights, analyze
					them then take the time to learn about your objectives, ask the right questions to understand your
					business.</p>
			</div>
		</li>
		<li className="flex">
	
			<div>
				<div className="text-xl font-bold text-indigo-800">Strategey</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and
					strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
				</p>
			</div>
		</li>
		<li className="flex">

			<div>
				<div className="text-xl font-bold text-indigo-800">Design</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We design the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
		<li className="flex">
	
			<div>
				<div className="text-xl font-bold text-indigo-800">Development</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
		
	</ul>
</div>
  
  </section>
   <section>

   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
    <div className="grid gap-8 lg:col-span-2">
      <div>
        <p className="mb-2 text-lg font-bold">Our mission</p>
        <p className="text-gray-700">
          An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him, he was always gloomy, he constantly complained.
        </p>
      </div>
      <div>
        <p className="mb-2 text-lg font-bold">The Wise Man\</p>
        <p className="text-gray-700">
          People have been coming to the wise man, complaining about the same problems every time. One day he told them a joke and everyone roared in laughter.
        </p>
      </div>
    </div>
    <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
      <div className="flex flex-col justify-between p-10">
        <div>
          <p className="text-lg font-semibold text-gray-800 sm:text-base">
            Funds Raised
          </p>
          <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
            $84 000 000
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800 sm:text-base">
            Products
          </p>
          <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
            52
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800 sm:text-base">
            Downloads
          </p>
          <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
            186M
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-10">
        <div>
          <p className="text-lg font-semibold text-gray-800 sm:text-base">Users</p>
          <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
            86K
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800 sm:text-base">
            Installations
          </p>
          <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
            917 000
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800 sm:text-base">
            Subscribers
          </p>
          <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
            213K
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<section>
<div className="p-4 text-gray-600">
	<h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">Vision</h1>

	<ul className="grid place-content-center sm:grid-cols-2 gap-8">
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Research</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We love numbers! We collect data and insights, analyze
					them then take the time to learn about your objectives, ask the right questions to understand your
					business.</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Strategey</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and
					strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">03.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Design</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We design the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Development</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-indigo-700">05.</div>
			<div>
				<div className="text-xl font-bold text-indigo-800">Deployment</div>
				<p className="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
					craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
				</p>
			</div>
		</li>
	</ul>
</div>
  </section>
 
 
  <section>

  </section>
    </>
  );
};

export default AboutUs;
