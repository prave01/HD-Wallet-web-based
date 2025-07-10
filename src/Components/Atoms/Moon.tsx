const Moon = () => {
  return (
    <div className=" flex flex-col absolute -translate-y-1">
      <div className="moon w-[65px] relative h-[65px] ">
        <div className=" w-[20px] h-[20px] absolute translate-y-7 translate-x-4 bg-gray-400 rounded-full blur-sm  border-2 border-black"></div>
        <div className=" w-[15px] h-[15px] absolute translate-y-2 translate-x-8 bg-gray-400 rounded-full blur-sm border-2 border-black"></div>
        <div className=" w-[15px] h-[15px] absolute translate-y-2 translate-x-8 bg-gray-400 rounded-full blur-sm border-2 border-black"></div>
        <div className=" w-[15px] h-[15px] absolute translate-y-5 translate-x-1 bg-gray-400 rounded-full blur-sm border-2 border-black"></div>
        <div className=" w-[10px] flex items-center justify-center h-[10px] absolute translate-y-5 translate-x-2  rounded-full border-1 border-zinc-700 border-r-2 border-dotted">
          {" "}
          <div className=" w-[15px] h-[15px] absolute bg-gray-900 rounded-full blur-sm border-2 border-black"></div>
          <div className="w-[5px] h-[5px] bg-white/20 rounded-full"></div>
        </div>
        <div className=" w-[10px] flex items-center justify-center h-[10px] absolute translate-y-12 border-b-transparent translate-x-6 rounded-full border-2 border-dotted border-gray-400">
          {" "}
          <div className=" w-[15px] h-[15px] absolute bg-gray-900 rounded-full blur-sm border-2 border-black"></div>
          <div className="w-[5px] h-[5px] bg-white/20 rounded-full"></div>
        </div>
      </div>

      <div className=" w-[10px] flex items-center justify-center h-[10px] absolute translate-y-8 border-b-transparent translate-x-10 rounded-full border-2 border-dotted border-gray-400">
        {" "}
        <div className=" w-[15px] h-[15px] absolute bg-gray-900 rounded-full blur-sm border-2 border-black"></div>
        <div className="w-[5px] h-[5px] bg-white/20 rounded-full"></div>
      </div>
      <div className=" w-[10px] flex items-center justify-center h-[10px] absolute translate-y-2 border-b-transparent translate-x-10 rounded-full border-2 border-dotted border-gray-400">
        {" "}
        <div className=" w-[15px] h-[15px] absolute bg-gray-900 rounded-full blur-sm border-2 border-black"></div>
        <div className="w-[5px] h-[5px] bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default Moon;
