"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';

const CTA = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });

  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
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
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                Contact with us to get more services from us.........
              </h2>
              <p>
              Please feel free to reach out to us, and we will ensure to offer you comprehensive and tailored solutions to meet your specific needs.






              </p>
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
              transition={{ duration: 1, delay: 0.5 }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <animated.img
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                  style={{ ...styles, width: 350, height: 300 }}
                />
                {isMobile ? (
                  <a
                    href="tel:8688275808"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white  px-6 py-3 font-medium text-black hover:opacity-90 dark:bg-purple-600 dark:text-white hover:translate-y-[-8px]"
                  >
                    Contact US
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-light.svg"
                      alt="Arrow"
                      className="dark:hidden"
                    />
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-dark.svg"
                      alt="Arrow"
                      className="hidden dark:block"
                    />
                  </a>
                ) : (
                  <a
                    href="mailto:atomsgroup01@gmail.com"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-black hover:opacity-90 dark:bg-purple-600 dark:text-white hover:translate-y-[-8px]"
                  >
                    Contact US
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-light.svg"
                      alt="Arrow"
                      className="dark:hidden"
                    />
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-dark.svg"
                      alt="Arrow"
                      className="hidden dark:block"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
