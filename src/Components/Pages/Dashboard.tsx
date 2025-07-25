import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import Accounts from "../Molecules/Accounts";
import { useEffect, useState } from "react";
import { CreateWallet } from "@/Actions/Wallet_Utils/CreateWallet.server";
import Modal from "../Molecules/Modal";
import { GetAccountPublicKeys } from "@/Actions/Wallet_Utils/GetKeys.server";

const Dashboard = ({
	accounts,
}: {
	accounts: Array<{ key: string; value: LocalStorage }>;
}) => {
	const [currentAcc, SetCurrentAcc] = useState<number>(0);

	const [publicKeys, setPublicKeys] = useState<Array<string> | null>([]);

	const [currentWallet, setCurrentWallet] = useState<number>(0);

	const handleCreate = () => {
		const acc = accounts[currentAcc];
		if (acc) {
			const previousValue: LocalStorage = JSON.parse(
				localStorage.getItem(acc.key) || "",
			);

			previousValue.totalWallets += 1;

			localStorage.setItem(acc.key, JSON.stringify(previousValue));
	
      window.dispatchEvent
    }

	};

	useEffect(() => {
		const acc = accounts[currentAcc];
		if (acc) {
			const raw = localStorage.getItem("publickey-store");
			if (!raw) return;

			try {
				const local = JSON.parse(raw);
				if (local[currentAcc] && acc.key) {
					setPublicKeys(local[currentAcc][acc.key]);
				}
			} catch (e) {
				console.error("Failed to parse localStorage item:", e);
			}
		}
	}, [currentAcc, accounts]);

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-between">
			<div className="flex h-fit w-full justify-end p-2">
				<span className="font-heads text-primary pt-6 text-7xl font-medium tracking-widest">
					DASHBOARD
				</span>
			</div>

			<div className="flex h-[60%] w-[90%] -translate-y-32 items-start justify-center gap-x-10 pl-10">
				<div className="relative flex w-fit translate-y-9 flex-col items-start justify-center">
					<Accounts setCurrentAcc={SetCurrentAcc} accounts={accounts} />
				</div>
				<hr className="h-full w-[1px] rounded-full bg-gray-500/40" />
				<div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-amber-600">
					<img
						src="./bg_image.png"
						className="absolute inset-0 -z-10 h-full w-full object-cover"
						alt="bg"
					/>

					<div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-md">
						<div className="flex gap-x-3 px-4">
							{Array(currentAcc)
								.fill(null)
								.map((_, idx) => (
									<Button
										key={idx}
										className="w-fit rounded-t-none rounded-b-lg bg-amber-950 px-2 py-1 text-lg font-semibold text-white hover:bg-amber-400 hover:text-amber-950"
									>
										Wallet {idx + 1}
									</Button>
								))}
							<Button className="w-fit rounded-t-none rounded-b-lg bg-amber-950 p-4 text-xl font-semibold text-white hover:bg-amber-400 hover:text-amber-950">
								+
							</Button>
							<div className="h-auto bg-white text-xl text-black">
								{publicKeys}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
