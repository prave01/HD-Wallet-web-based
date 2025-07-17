import { motion } from "motion/react";
import CreatePassword from "../Molecules/CreatePassword";
import GenerateMnemonics from "../Molecules/GenerateMnemonics";
import { useState } from "react";
import ComponentMap from "../Molecules/ComponentMap";

const NewAccount = () => {
	const [currentComp, setCurrentComp] = useState<{ name: string; idx: number }>(
		{
			name: "GenerateMnemonics",
			idx: 0,
		},
	);

	const Components: Array<React.ReactNode> = [
		<GenerateMnemonics />,
		<CreatePassword />,
	];

	return (
		<div className="bg-cardbg relative flex h-full w-full flex-col items-center justify-center rounded-lg">
			<ComponentMap
				className="absolute top-10 w-full p-4"
				currentComp={currentComp}
				setNext={setCurrentComp}
				data={[
					{ name: "GenerateMnemonics", default: "mute" },
					{ name: "CreatePassword", default: "mute" },
				]}
			/>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
					transition: { delay: 0.5 },
				}}
				className="h-auto w-auto"
			>
				{Components[comIndex]}
			</motion.div>
		</div>
	);
};

export default NewAccount;
