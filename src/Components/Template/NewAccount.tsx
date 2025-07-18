import CreatePassword from "../Molecules/CreatePassword";
import GenerateMnemonics from "../Molecules/GenerateMnemonics";
import { useState } from "react";
import ComponentMap from "../Molecules/ComponentMap";

const NewAccount = () => {
	const [currentComp, setCurrentComp] = useState<number>(0);

	const Components: Array<React.ReactNode> = [
		<GenerateMnemonics setNext={setCurrentComp} />,
		<CreatePassword />,
	];

	return (
		<div className="bg-cardbg relative flex h-full w-full flex-col items-center justify-center rounded-lg">
			<ComponentMap
				currentComp={currentComp}
				className="absolute top-10 w-full p-4"
				data={[
					{ name: "GenerateMnemonics", default: "mute" },
					{ name: "CreatePassword", default: "mute" },
				]}
			/>

			{Components[currentComp]}
		</div>
	);
};

export default NewAccount;
