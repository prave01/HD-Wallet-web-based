import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      className="w-screen h-screen absolute flex items-start justify-start -z-10"
      style={{
        background:
          "radial-gradient(circle at left 0%, red 10%, transparent 1%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "10% 10%",
      }}
      animate={{
        backgroundSize: ["10% 10%", "1000% 1000%"],
        transition: { duration: 2 },
      }}
    ></motion.div>
  );
};

export default Background;
