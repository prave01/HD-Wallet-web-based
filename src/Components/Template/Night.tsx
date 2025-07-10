import Clouds from "../Atoms/Clouds";
import Moon from "../Atoms/Moon";

const Night = () => {
  return (
    <div className="-translate-y-8 translate-x-1">
      {" "}
      <Moon />{" "}
      <div className="translate-y-8">
        <Clouds color="bg-gray-800 blur-sm outline-2 outline-white" />
      </div>
    </div>
  );
};

export default Night;
