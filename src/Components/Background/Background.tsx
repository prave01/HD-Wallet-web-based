import { motion } from "framer-motion";
import { useState } from "react";

const Background = ({ theme }: { theme: string }) => {
  const [overlaybg, setOverlaybg] = useState<string>(
    theme == "morning" ? "bg-[#010d08]" : "bg-[#f5e6c4]",
  );

  console.log(overlaybg);

  const onComplete = () => {
    console.log(overlaybg);
    theme == "morning"
      ? setOverlaybg("bg-[#f5e6c4]")
      : setOverlaybg("bg-[#010d08]");
  };

  return (
    <div>
      {" "}
      <div className={`w-full h-full ${overlaybg} absolute -z-10`} />
      <motion.div
        className="w-screen h-screen absolute flex items-start justify-start -z-10"
        style={{
          background: `radial-gradient(circle at left 0%,${theme == "night" ? "#010d08" : "#f5e6c4"} 10%, transparent 1%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "10% 10%",
        }}
        key={theme}
        animate={{
          backgroundSize: ["10% 10%", "1000% 1000%"],
          transition: { duration: 1},
        }}
        onAnimationComplete={onComplete}
      ></motion.div>
    </div>
  );
};

export default Background;
