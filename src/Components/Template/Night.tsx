import Clouds from "../Atoms/Clouds";
import Moon from "../Atoms/Moon";
import { motion } from "motion/react";

const Night = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="translate-x-1 -translate-y-8"
    >
      {" "}
      <Moon />{" "}
      <div className="translate-y-8">
        <Clouds color="bg-gray-800 blur-sm outline-2 outline-white" />
      </div>
    </motion.div>
  );
};

export default Night;
