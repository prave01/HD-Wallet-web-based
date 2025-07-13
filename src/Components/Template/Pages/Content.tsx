const Content = () => {
  return (
    <div className="relative flex h-full w-full flex-row items-end justify-between">
      <div>
        <h1 className="text-primary text-left text-[15vw] leading-24 font-medium tracking-wide md:text-9xl">
          Mobs-wallet
        </h1>
        <p className="font-super text-primary pl-[10px]">
          For the mob that lives by Durden's rules
        </p>
      </div>
      <div className="translate-x-28 overflow-hidden">
        <h1 className="text-primary font-super translate-x-8 translate-y-40 text-2xl">
          Everything is a <br /> Copy../ <br /> of a Copy../ <br /> of a Copy../
        </h1>
        <img src="./fightclub.png" className="rounded-lg"></img>
      </div>
      <img
        className="absolute right-0 -z-10 h-[90vh] object-contain"
        src="./lamp_post.png"
      ></img>
      <div className="conic absolute h-[150px] w-[150px] rounded-full"></div>
    </div>
  );
};

export default Content
