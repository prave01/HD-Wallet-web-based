import zxcvbn from "zxcvbn";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";
import { Input } from "@/Shadcn_Components/shadcn_ui/input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import { motion } from "motion/react";

const CreatePassword = ({
	setNext,
	setPassword,
}: {
	setNext: (message: any) => void;
	setPassword: (message: any) => void;
}) => {
	const [currentPassword, setCurrentPassword] = useState<string>("");
	const [ConfirmPassword, setConfirmPassword] = useState<string>("");
	const [Match, setMatch] = useState<boolean>(false);

	const [SubmitClick, setSubmitClick] = useState<boolean>(false);

	const result = zxcvbn(currentPassword);
	useEffect(() => {
		if (
			ConfirmPassword == currentPassword &&
			(ConfirmPassword && currentPassword) != ""
		) {
			setMatch(true);
		} else {
			setMatch(false);
		}
	}, [ConfirmPassword, currentPassword]);
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
		>
			{" "}
			<Card className="text-secondary h-fit min-w-[500px] rounded-md border-2 border-amber-950 bg-amber-100/10 p-6 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
				<CardHeader className="">
					<CardTitle className="flex w-full items-center justify-between gap-10">
						<span className="text-primary text-md w-fit rounded-sm bg-amber-700/50 px-2 py-2 font-semibold">
							Create Password
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
						value={currentPassword}
						type="password"
						onPaste={(e) => e.preventDefault()}
						required
						disabled={result.score! >= 4 && SubmitClick ? true : false}
						className="text-primary h-[30px] w-full max-w-[400px] border-0 bg-amber-900 p-4 outline-0"
						onInput={(target) => {
							target.preventDefault();
							setCurrentPassword(target.currentTarget.value);
							setConfirmPassword("");
						}}
						placeholder="PASSWORD"
					></Input>
					<p
						className={cn(result.score < 4 ? "text-red-700" : "text-green-800")}
					>
						Score: {result.score}
					</p>
					<br />
					<Input
						value={ConfirmPassword}
						onPaste={(e) => e.preventDefault()}
						type="password"
						disabled={result.score! >= 4 && SubmitClick ? true : false}
						className="text-primary h-[30px] w-full max-w-[400px] border-0 bg-amber-900 p-4 outline-0"
						onInput={(target) => {
							setConfirmPassword(target.currentTarget.value);
						}}
						placeholder="RETYPE PASSWORD"
					></Input>
					<p className={cn(Match ? "text-green-800" : "text-red-700")}>
						{Match ? "Matched" : "Not Matched"}
					</p>
				</CardContent>
				<CardFooter>
					<Button
						onClick={() => {
							setSubmitClick(true);
							setPassword(ConfirmPassword);
							//@ts-ignore
							setNext((prev) => prev + 1);
						}}
						disabled={result.score >= 4 && Match && !SubmitClick ? false : true}
						className="text-primary w-20 cursor-pointer rounded-lg bg-yellow-600 p-4 text-center hover:bg-gray-600 hover:text-amber-200"
					>
						Next
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
		</motion.div>
	);
};

export default CreatePassword;
