const Moon = () => {
  return (
    <div className="absolute flex -translate-y-1 flex-col">
      <div className="moon relative h-[65px] w-[65px]">
        <div className="absolute h-[20px] w-[20px] translate-x-4 translate-y-7 rounded-full border-2 border-black bg-gray-400 blur-sm"></div>
        <div className="absolute h-[15px] w-[15px] translate-x-8 translate-y-2 rounded-full border-2 border-black bg-gray-400 blur-sm"></div>
        <div className="absolute h-[15px] w-[15px] translate-x-8 translate-y-2 rounded-full border-2 border-black bg-gray-400 blur-sm"></div>
        <div className="absolute h-[15px] w-[15px] translate-x-1 translate-y-5 rounded-full border-2 border-black bg-gray-400 blur-sm"></div>
        <div className="absolute flex h-[10px] w-[10px] translate-x-2 translate-y-5 items-center justify-center rounded-full border-1 border-r-2 border-dotted border-zinc-700">
          {" "}
          <div className="absolute h-[15px] w-[15px] rounded-full border-2 border-black bg-gray-900 blur-sm"></div>
          <div className="h-[5px] w-[5px] rounded-full bg-white/20"></div>
        </div>
        <div className="absolute flex h-[10px] w-[10px] translate-x-6 translate-y-12 items-center justify-center rounded-full border-2 border-dotted border-gray-400 border-b-transparent">
          {" "}
          <div className="absolute h-[15px] w-[15px] rounded-full border-2 border-black bg-gray-900 blur-sm"></div>
          <div className="h-[5px] w-[5px] rounded-full bg-white/20"></div>
        </div>
      </div>

      <div className="absolute flex h-[10px] w-[10px] translate-x-10 translate-y-8 items-center justify-center rounded-full border-2 border-dotted border-gray-400 border-b-transparent">
        {" "}
        <div className="absolute h-[15px] w-[15px] rounded-full border-2 border-black bg-gray-900 blur-sm"></div>
        <div className="h-[5px] w-[5px] rounded-full bg-white/20"></div>
      </div>
      <div className="absolute flex h-[10px] w-[10px] translate-x-10 translate-y-2 items-center justify-center rounded-full border-2 border-dotted border-gray-400 border-b-transparent">
        {" "}
        <div className="absolute h-[15px] w-[15px] rounded-full border-2 border-black bg-gray-900 blur-sm"></div>
        <div className="h-[5px] w-[5px] rounded-full bg-white/20"></div>
      </div>
    </div>
  );
};

export default Moon;
