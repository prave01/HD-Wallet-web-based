import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import {
	Card,
	CardContent,
	CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";
import { motion } from "motion/react";

const SelectCoin = ({ setCoin }: { setCoin: (message: string) => void }) => {
	return (
		<motion.div
			initial={{
				// opacity: 0,
				scaleX: 0,
			}}
			animate={{
				// opacity: 1,
				scaleX: 1,
			}}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="h-auto w-auto"
		>
			<Card className="text-secondary h-fit w-auto rounded-md border-2 border-amber-950 bg-amber-100/10 p-6 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
				<CardTitle>
					{" "}
					<span className="text-primary text-md w-fit rounded-sm bg-amber-700/50 px-2 py-2 font-semibold">
						Select Coin
					</span>
				</CardTitle>
				<CardContent className="flex w-full items-center justify-center gap-10">
					<Button
						onClick={() => setCoin("eth")}
						className="text-primary flex h-auto w-auto flex-col items-center justify-center rounded-md bg-amber-600 p-4 text-lg hover:bg-amber-950 hover:text-amber-300"
					>
						<img src="./eth.png" className="h-[100px] w-[100px]" />
						<p className="">Etherem</p>
					</Button>
					<Button
						onClick={() => setCoin("sol")}
						className="text-primary flex h-auto w-auto flex-col items-center justify-center rounded-md bg-amber-600 p-4 text-lg hover:bg-amber-950 hover:text-amber-300"
					>
						<img src="./sol.png" className="h-[100px] w-[100px]" />
						<p className="">Solana</p>
					</Button>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default SelectCoin;
