import { Encrypt } from "@/Actions/Crypto/Encrypt.server";
import { useEffect, useRef, useState } from "react";
import { SyncLoader } from "react-spinners";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { GetAccountPublicKeys } from "@/Actions/Wallet_Utils/GetKeys.server";
import { useWalletStore } from "@/Store/WalletStore";

const CreateWallet = ({
	mnemonics,
	password,
	coin,
}: {
	mnemonics: string;
	password: string;
	coin: "sol" | "eth";
}) => {
	const [isEncrypting, setIsEncrypting] = useState<boolean>(false);

	const [isStoring, setIsStoring] = useState<boolean>(false);

	const hasRun = useRef(false);

	useEffect(() => {
		if (hasRun.current) return;
		hasRun.current = true;

		if (!password || !mnemonics) return;

		const encryptData = async () => {
			setIsEncrypting(true);
			try {
				const encrypted = await Encrypt(password, mnemonics, coin);
				setIsEncrypting(false);
				setIsStoring(true);
				const uniqueWallet = `mobswallet-${crypto.randomUUID().slice(0, 8)}`;
				localStorage.setItem(uniqueWallet, JSON.stringify(encrypted));

				const PublicKeys = await GetAccountPublicKeys(
					JSON.parse(localStorage.getItem(uniqueWallet) || ""),
					password,
				);

				const pubData = [{ [uniqueWallet]: PublicKeys }];

				localStorage.setItem("publickey-store", JSON.stringify(pubData));

				useWalletStore.getState().setMnemonic("Account-1", mnemonics);

				console.log(
					"Zustand state",
					useWalletStore((state) => state.accounts),
				);

				setIsStoring(false);
			} catch (err) {
				console.error("Encryption error:", err);
				setIsEncrypting(false);
				setIsStoring(false);
			}
		};

		encryptData();
	}, []);
	return (
		<div className="flex h-auto w-[300px] flex-col items-center justify-center gap-y-6 text-xl text-orange-800">
			<motion.div
				initial={{ translateY: 4, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
				className="flex w-full items-center justify-center space-x-3 rounded-lg bg-amber-600 px-5 py-2"
			>
				<span>Step 1: Encrypting</span>
				{isEncrypting ? <SyncLoader color="#fff" size={6} /> : <CheckIcon />}
			</motion.div>
			<motion.div
				initial={{ translateY: 5, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
				className={cn(
					!isEncrypting ? "flex" : "hidden",
					"w-full items-center justify-center space-x-3 rounded-lg bg-amber-600 px-5 py-2",
				)}
			>
				<span>Step 2: Storing locally</span>
				{isStoring ? <SyncLoader color="#fff" size={6} /> : <CheckIcon />}
			</motion.div>
			<motion.div
				initial={{ translateY: 5, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
				className={cn(
					!isEncrypting && !isStoring ? "flex" : "hidden",
					"roundedl-xl border-amber-300 text-white",
				)}
			>
				<Link to="/Dashboard">
					<Button className="roundedl-lg cursor-pointer border-2 border-amber-300 bg-amber-600/90 text-lg font-bold text-amber-900 hover:bg-black/70 hover:text-amber-400">
						Go to wallet
					</Button>
				</Link>
			</motion.div>
		</div>
	);
};

export default CreateWallet;
