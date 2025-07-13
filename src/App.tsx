import { useState } from "react";
import "./App.css";

import Background from "./Components/Background/Background";
import Morning from "./Components/Template/Morning";
import Night from "./Components/Template/Night";
import { motion } from "motion/react";
import { cn } from "./lib/utils";

function App() {
	const [globalTheme, setTheme] = useState("light");

	const handleClick = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};
	return (
		<div
			className={cn(globalTheme, "relative h-screen w-screen overflow-hidden")}
		>
			<div className="absolute -z-10 h-full w-full">
				<Background key={globalTheme} theme={globalTheme} />
			</div>

			<motion.div
				onClick={handleClick}
				className="absolute z-10 cursor-pointer pt-14 pl-5"
			>
				{globalTheme === "light" ? <Morning /> : <Night />}
			</motion.div>
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
						Everything is a <br /> Copy../ <br /> of a Copy../ <br /> of a
						Copy../
					</h1>
					<img src="./fightclub.png" className="rounded-lg"></img>
				</div>
				<img
					className="absolute right-0 h-[90vh] -z-10 object-contain"
					src="./lamp_post.png"
				></img>
			</div>
		</div>
	);
}

export default App;
