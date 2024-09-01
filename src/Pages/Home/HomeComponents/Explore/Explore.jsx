import "./explore.css";
import { motion } from "framer-motion";

const Explore = () => {
  return (
    <div className="w-full mx-auto my-10 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
        <h1 className="text-4xl text-center py-5 font-bold">
          Explore Your Visa
        </h1>
      </motion.div>
      <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-10 px-5 gap-5 ">
        {[
          { title: "Visa Free", countries: 12 },
          { title: "E-Visa", countries: 12 },
          { title: "Visa on Arrival", countries: 12 },
          { title: "Flexible Submission", countries: 12 },
          { title: "In-person Submission", countries: 12 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center hover:bg-[#447ddf] hover:text-white rounded cursor-pointer transition duration-500 bg-[#f3f3f3] py-5 px-2 justify-center"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h1 className="text-xl">{item.title}</h1>
              <p className="text-center">({item.countries} countries)</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
