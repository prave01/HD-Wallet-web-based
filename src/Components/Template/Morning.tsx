import Clouds from "../Atoms/Clouds";
import Sun from "../Atoms/Sun";

const Morning = () => {
  return (
    <>
      <Sun />
      <Clouds color="bg-white blur-sm outline-2 outline-black" />
    </>
  );
};

export default Morning;
