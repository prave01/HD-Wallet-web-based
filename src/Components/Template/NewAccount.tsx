import CreatePassword from "../Molecules/CreatePassword";
import GenerateMnemonics from "../Molecules/GenerateMnemonics";
import { useMemo, useState } from "react";
import ComponentMap from "../Molecules/ComponentMap";
import SelectCoin from "../Molecules/SelectCoin";
import CreateWallet from "../Molecules/CreateWallet";

const NewAccount = () => {
	const [currentComp, setCurrentComp] = useState<number>(0);

	const [password, setPassword] = useState<string>("");

	const [coin, setCoin] = useState<"sol" | "eth">("sol");

	const [mnemonics, setMnemonics] = useState<string>("");

	const Components: Array<React.ReactNode> = [
		<GenerateMnemonics setMnemonic={setMnemonics} setNext={setCurrentComp} />,
		<CreatePassword setPassword={setPassword} setNext={setCurrentComp} />,
		<SelectCoin setCoin={setCoin} setNext={setCurrentComp} />,
	];

	const FinalStep = useMemo(() => {
		return <CreateWallet coin={coin} mnemonics={mnemonics} password={password} />;
	}, [mnemonics, password]);

	const Data = [
		{ name: "GenerateMnemonics" },
		{ name: "CreatePassword" },
		{ name: "SelectCoin" },
	];

	return (
		<div className="bg-cardbg relative flex h-full w-full flex-col items-center justify-center rounded-lg">
			<ComponentMap
				currentComp={currentComp}
				className="absolute top-10 w-full p-4"
				data={Data}
			/>
			{currentComp < Data.length ? Components[currentComp] : FinalStep}
		</div>
	);
};

export default NewAccount;
