import { cn } from "@/lib/utils";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import { Card, CardContent } from "@/Shadcn_Components/shadcn_ui/card";
import { useEffect, useState } from "react";

const Accounts = ({
	accounts,
	setCurrentAcc,
}: {
	accounts: Array<{ key: string; value: LocalStorage }>;
	setCurrentAcc: (message: number) => void;
}) => {
	const [selected, setSelected] = useState<number>(0);

	useEffect(() => {
		setCurrentAcc(accounts[selected].value.totalWallets);
	}, []);

	return (
		<div className="h-auto w-auto">
			{" "}
			<p className="absolute top-0 -z-10 translate-x-[0px] -translate-y-10 rounded-2xl bg-amber-400 p-2 pb-10 text-xl font-bold text-amber-800">
				Accounts
			</p>
			<Card className="max-h-auto min-h-[100px] w-[250px] rounded-lg border-0 bg-amber-400 py-2">
				<CardContent className="space-y-2 px-2">
					{accounts.map((i, idx) => (
						<Button
							onClick={() => {
								setSelected(idx);
								setCurrentAcc(accounts[selected].value.totalWallets);
							}}
							key={idx}
							className={cn(
								selected == idx ? "bg-amber-700" : "bg-black/40",
								"flex w-full items-center justify-between rounded-sm px-1 py-1 text-lg hover:bg-amber-950 hover:text-white",
							)}
						>
							Acc_{idx + 1}
							<div className="text-md w-fit rounded-sm bg-black px-2">
								<span className="bg-gradient-to-b from-amber-700 to-amber-200 bg-clip-text text-transparent">
									{i.key.split("-")[1]}
								</span>
							</div>
						</Button>
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default Accounts;
