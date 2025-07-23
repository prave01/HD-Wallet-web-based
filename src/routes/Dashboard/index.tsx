import { CreateWallet } from "@/Actions/Wallet_Utils/CreateWallet.server";
import Dashboard from "@/Components/Pages/Dashboard";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/Dashboard/")({
	component: RouteComponent,
});

function RouteComponent() {
	const prefix = "mobswallet";
	const accounts: Array<{ key: string; value: LocalStorage }> = [];

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

	return (
		<div className="text-wrap text-black">
			<Dashboard accounts={accounts} />
		</div>
	);

