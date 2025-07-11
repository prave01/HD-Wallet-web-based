import Clouds from "../Atoms/Clouds";
import Sun from "../Atoms/Sun";
import { motion } from "motion/react";

const Morning = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Sun />
      <Clouds color="bg-white blur-sm outline-2 outline-black" />
    </motion.div>
  );
};

export default Morning;
