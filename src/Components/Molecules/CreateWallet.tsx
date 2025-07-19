import { Encrypt } from "@/Actions/Crypto/Encrypt.server";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { CheckIcon } from "lucide-react";

const CreateWallet = ({
	mnemonics,
	password,
}: {
	mnemonics: string;
	password: string;
}) => {
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!password || !mnemonics) return;

		const encryptData = async () => {
			setLoading(true);
			await Encrypt(password, mnemonics);
			setLoading(false);
		};

		encryptData();
	}, []);

	return (
		<div className="h-[100px] w-[500px] rounded-lg bg-amber-700/40 text-white">
			<div className="">
				Encryption {loading ? <SyncLoader /> : <CheckIcon />}
			</div>
		</div>
	);
};

export default CreateWallet;
