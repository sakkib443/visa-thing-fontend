import { AiFillInteraction } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./serviceComponent.css";

const ServiceComponent = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index, // Staggered animation based on index
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the card is visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div className="bg-[#F3F3F3] py-16 " ref={ref}>
      <div className="w-10/12 mx-auto text-center">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl font-semibold">Services</h2>
        </motion.div>
        <div className="grid my-10 grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center">
          {Array(6).fill().map((_, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center gap-3 hover:bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300 px-4 hover:text-black bg-white transition duration-500 z-50 rounded shadow-md services"
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              custom={index} // Pass the index for staggered animation
            >

              <div>
                <div className="md:animate-bounce-slow flex flex-col items-center justify-center h-[100px] ">
                  <AiFillInteraction className="text-6xl p-2 rounded-full border border-blue-400 text-sky-500" />
                </div>
                <div className="mt-1 mb-2 max-w-[400px]">
                  <h2 className="font-bold mb-2">Visa Processing (Basic)</h2>
                  <p>
                    Provides accurate visa information and expert guidance on
                    preparing a comprehensive visa application pack.
                  </p>
                </div>
                <button>Read More</button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default ServiceComponent;
