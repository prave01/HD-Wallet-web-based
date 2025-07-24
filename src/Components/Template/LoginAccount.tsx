import { CheckPassword } from "@/Actions/Wallet_Utils/CheckPassword.server";
import { GetAccountPublicKeys } from "@/Actions/Wallet_Utils/GetKeys.server";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";
import { Input } from "@/Shadcn_Components/shadcn_ui/input";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

const LoginAccount = () => {
	const [password, setPassword] = useState<string>("");

	const prefix = "mobswallet";

	const accounts: Array<{ key: string; value: LocalStorage }> = [];

	const navigate = useNavigate();

	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key && key.startsWith(prefix)) {
			const value = localStorage.getItem(key);
			if (value) {
				try {
					accounts.push({ key: key, value: JSON.parse(value) });
				} catch (e) {
					console.warn(`Failed to parse value for key ${key}`, e);
				}
			}
		}
	}

	const handleLogin = async () => {
		const PublicKeys = await CheckPassword(accounts[0].value, password);

		if (PublicKeys) {
			const pubData = await Promise.all(
				accounts.map(async (account) => {
					const accountKeys = await GetAccountPublicKeys(
						account.value,
						password,
					);
					return { [account.key]: accountKeys };
				}),
			);

			localStorage.setItem("public-key-store", JSON.stringify(pubData));
			console.log(pubData);
			const sessionToken = crypto.randomUUID();
			const expiresInMinutes = 60;
			const expirationTime = Date.now() + expiresInMinutes * 60 * 1000;

			const session = {
				token: sessionToken,
				expiresAt: expirationTime,
			};

			localStorage.setItem("session", JSON.stringify(session));

			navigate({ to: "/Dashboard" });
		}
	};

	return (
		<div className="bg-cardbg flex h-full w-full items-center justify-center">
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
			>
				{" "}
				<Card className="text-secondary h-fit min-w-[500px] rounded-md border-2 border-amber-950 bg-amber-100/10 p-6 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
					<CardHeader className="">
						<CardTitle className="flex w-full items-center justify-between gap-10">
							<span className="text-primary text-md w-fit rounded-sm bg-amber-700/50 px-2 py-2 font-semibold">
								Password
							</span>
						</CardTitle>
						{/* <CardAction className="rounded-full text-lg -translate-y-5 border-2 border-green-800 p-1 px-2 text-green-500"> */}
						{/**/}
						{/* 	Ongoing */}
						{/* </CardAction> */}
						{/* <br className="h-10 w-[40px] border-2 border-amber-200 bg-white text-amber-200" /> */}
					</CardHeader>
					<CardContent>
						<Input
							value={password}
							type="password"
							onPaste={(e) => e.preventDefault()}
							required
							className="text-primary h-[30px] w-full max-w-[400px] border-0 bg-amber-900 p-4 outline-0"
							onInput={(target) => {
								target.preventDefault();
								setPassword(target.currentTarget.value);
							}}
							placeholder="PASSWORD"
						></Input>
					</CardContent>
					<CardFooter>
						<Button
							onClick={handleLogin}
							className="text-primary w-20 cursor-pointer rounded-lg bg-yellow-600 p-4 text-center hover:bg-gray-600 hover:text-amber-200"
						>
							Login
						</Button>
						{/* <Button */}
						{/*   onClick={() => setSubmitClick(true)} */}
						{/*   disabled={result.score >= 4 && Match && !SubmitClick ? false : true} */}
						{/*   className="text-primary cursor-pointer border-2 border-amber-600 bg-amber-700 text-lg font-medium hover:bg-transparent" */}
						{/* > */}
						{/*   {" "} */}
						{/*   {SubmitClick ? "Loading..." : "Submit"}{" "} */}
						{/* </Button> */}
					</CardFooter>
				</Card>
			</motion.div>{" "}
		</div>
	);
};

export default LoginAccount;
