import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import FightClub from "../Template/FightClub";

const Content = () => {
  return (
    <div className="relative flex h-full w-full">
      <div className="text-primary flex h-full w-full -translate-y-[50px] flex-col items-start justify-center">
        {" "}
        <p className="ml-[10px] border-2 border-red-600 px-2 text-[2vw]">
          <span className="text-amber-700">RULE: </span>Never Ever Talk About
          the Club
        </p>
        <hr className="broder-black mt-4 mb-3 w-full border-2" />
        <div className="ml-[10px] w-fit align-middle text-2xl">
          <div className="flex items-center gap-2">
            <p>If you are new to the club =&gt;</p>
            <Button className="text-primary cursor-pointer border-2 border-amber-600 bg-amber-700 text-lg font-medium hover:bg-transparent">
              {" "}
              Create new wallet{" "}
            </Button>
          </div>
          <hr className="broder-black mt-4 mb-4 w-full border-1 border-dashed" />
          <div className="flex items-center gap-2">
            <Button className="text-primary cursor-pointer border-2 border-amber-600 bg-amber-700 text-lg font-medium hover:bg-transparent">
              {" "}
              Login to wallet{" "}
            </Button>
            <p>if your are a member</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 flex w-full flex-row items-end justify-between">
        <div>
          <h1 className="text-primary text-left text-[15vw] leading-24 font-medium tracking-wide md:text-9xl">
            Mobs-wallet
          </h1>
          <p className="font-super text-primary pl-[10px]">
            For the mob that lives by Durden's rules
          </p>
        </div>

        {/* FightClub Illustrations */}
        <FightClub />
      </div>
    </div>
  );
};

export default Content;
