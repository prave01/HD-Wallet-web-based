import FightClub from "../Template/FightClub";

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
			<FightClub />
		</div>
	);
};

export default Content;
