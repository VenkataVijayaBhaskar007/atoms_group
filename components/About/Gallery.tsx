"use client";
import { motion } from "framer-motion"; 
import "./style.css"
const Gallery = () => {
  
  return (
  <section>
  

{/*gallery section starts*/}
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
        className="animate_left"
      > 
<div className="flex flex-wrap  mb-10 ">

                    <div className="w-full lg:w-12/12 px-10">
                     {/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-4">
                Atoms Gallery
              </h4> */}
    
                    </div>
                </div>
                </motion.div>
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
        className="animate_left"
      > 
<div className="gridywrap grid grid-cols-2 md:grid-cols-4 gap-4 px-10 ">
<div className="grid gap-4">
<div className="relative">
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610854/5.png" alt="" />
  <div className="gradient-overlay "></div>
  <div className="image-info">
  <h3 className="text-3xl ">Innovative Software Solutions</h3>
    <p className="weight">The group drives technological advancement with innovative software solutions for businesses and individuals.</p>
  </div>
</div>

<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610598/15.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Digital </h3>
  <h3 className="text-3xl ">Transformation</h3>
    <p className="weight">Atoms Group bridges the digital divide through digital marketing services, enabling thriving in the digital age.</p>
  </div>
</div>

</div>

    <div className="grid gap-4">
    <div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610598/6.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  
  <h3 className="gallerytext ">Enhanced Life Skills</h3>
    <p className="weight">Atoms Group empowers students with life skills, fosters personal development, and prepares them for success.</p>
  </div>
</div>
<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610854/14.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Entrepreneurial Spirit</h3>
    <p className="weight">Atoms Group inspires an entrepreneurial spirit, encouraging innovation and business development through diverse projects.</p>
  </div>
</div>
        
    </div>
    <div className="grid gap-4">
    <div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610850/7.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Global Communication</h3>
    <p className="weight">English learning programs enhance global communication, connecting individuals and fostering understanding.</p>
  </div>
</div>
        
<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610598/11.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
 
  <h3 className="text-3xl ">Indulgence in Happiness</h3>
    <p className="weight">Atoms Group's ice cream products bring joy and indulgence, creating moments of happiness for individuals and families.</p>
  </div>
</div>
    </div>
    <div className="grid gap-4">
    <div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/610422/2.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl ">Capturing Moments</h3>
    <p className="weight">Visual services capture and preserve memories, promoting community through shared experiences.</p>
  </div>
</div>
<div className="relative">
  
  <img className="h-auto max-w-full rounded-lg" src="./images/gallery/6101024/4.png" alt="" />
  <div className="gradient-overlay " ></div>
  <div className="image-info">
  <h3 className="text-3xl "> Youth power</h3>
    <p className="weight">The group empowers youth towards their dreams, promoting a sense of youth power.</p>
  </div>
</div>
    </div>
</div>
</motion.div>
{/* gallery section end */}
</section>
);
};

export default Gallery;