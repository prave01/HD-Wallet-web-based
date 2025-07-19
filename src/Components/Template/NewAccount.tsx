import CreatePassword from "../Molecules/CreatePassword";
import GenerateMnemonics from "../Molecules/GenerateMnemonics";
import { useState } from "react";
import ComponentMap from "../Molecules/ComponentMap";
import SelectCoin from "../Molecules/SelectCoin";

const NewAccount = () => {
	const [currentComp, setCurrentComp] = useState<number>(0);

	const [password, setPassword] = useState<string | null>("");

	const [coin, setCoin] = useState<string>("");

	const [mnemonics, setMnemonics] = useState<string>("");

	const Components: Array<React.ReactNode> = [
		<GenerateMnemonics setMnemonic={setMnemonics} setNext={setCurrentComp} />,
		<CreatePassword setPassword={setPassword} setNext={setCurrentComp} />,
		<SelectCoin setCoin={setCoin} setNext={setCurrentComp} />, 
  ];

	return (
		<div className="bg-cardbg relative flex h-full w-full flex-col items-center justify-center rounded-lg">
			<ComponentMap
				currentComp={currentComp}
				className="absolute top-10 w-full p-4"
				data={[
					{ name: "GenerateMnemonics", default: "mute" },
					{ name: "CreatePassword", default: "mute" },
					{ name: "SelectCoin", default: "mute" },
				]}
			/>
			{Components[currentComp]}
		</div>
	);
};

export default NewAccount;
