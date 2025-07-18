"use client";

import { generateWalletMnemonic } from "@/Actions/GetMnumonics_Server.server";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";
import { CheckIcon, CopyIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { PulseLoader } from "react-spinners";

const GenerateMnemonics = ({ setNext }: { setNext: (messge: any) => void }) => {
	const [mnemonic, setMnemonic] = useState<string[]>([]);
	const [copied, setCopied] = useState(false);
	const [loader, setLoader] = useState(false);
	const [buttonClicked, setButtonClicked] = useState(false);

	async function fetchMnemonic() {
		setLoader(true);

		const result = await generateWalletMnemonic();
		setMnemonic(result.split(" "));
		setLoader(false);
	}

	const handleCopy = async () => {
		try {
			copy(mnemonic.join(" "));
			setCopied(true);
			setTimeout(() => setCopied(false), 3000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: { delay: 0.5 },
			}}
			layout
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="h-auto w-auto"
		>
			<Card className="text-secondary h-fit w-auto rounded-md border-2 border-amber-950 bg-amber-100/10 p-6 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
				<CardTitle className="flex w-full items-center justify-between gap-10">
					<span className="text-primary text-md w-fit rounded-sm bg-amber-700/50 px-2 py-2 font-semibold">
						Generate Mnemonics
					</span>
					<span className="h-full align-bottom text-sm font-bold wrap-anywhere text-red-600 italic">
						Please copy these phrases and store <br />
						safely for wallet recovery.
					</span>
				</CardTitle>
				<CardContent className="flex h-[150px] max-w-[800px] items-center justify-center">
					{buttonClicked == false && (
						<Button
							onClick={() => {
								setButtonClicked(true);
								fetchMnemonic();
							}}
							className={`${
								loader ? "hidden" : "flex"
							} text-primary absolute cursor-pointer rounded-lg border-2 border-amber-700 bg-transparent p-2 font-semibold hover:bg-transparent`}
						>
							Click to Generate
						</Button>
					)}
					{loader ? (
						<PulseLoader color="#fa6b05" />
					) : (
						<div className="grid h-auto grid-cols-6 items-center justify-center gap-x-2 gap-y-3 align-middle">
							{mnemonic.map((item: string, idx: number) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										opacity: {
											type: "tween",
											bounce: 0.1,
											delay: idx / 10 + 0.8,
										},
									}}
									className="text-primary w-auto rounded-lg border-2 border-amber-950 p-2 text-center text-lg"
								>
									{item}
								</motion.div>
							))}
						</div>
					)}{" "}
				</CardContent>
				<CardFooter className="flex h-auto w-full items-center justify-between">
					<Button
						disabled={buttonClicked ? false : true}
						onClick={handleCopy}
						className="text-primary w-20 cursor-pointer rounded-lg bg-yellow-600 p-4 text-center hover:bg-gray-600 hover:text-amber-200"
					>
						{" "}
						{copied ? "Copied!" : "Copy"}
						{copied ? (
							<CheckIcon className="h-10 w-10" />
						) : (
							<CopyIcon className="h-10 w-10" />
						)}
					</Button>
					<Button
						//@ts-ignore
						onClick={() => setNext((prev) => prev + 1)}
						disabled={buttonClicked ? false : true}
						className="text-primary w-20 cursor-pointer rounded-lg bg-yellow-600 p-4 text-center hover:bg-gray-600 hover:text-amber-200"
					>
						Next
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default GenerateMnemonics;
