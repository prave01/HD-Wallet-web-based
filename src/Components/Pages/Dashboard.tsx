import { Card, CardContent } from "@/Shadcn_Components/shadcn_ui/card";

const Dashboard = ({
	accounts,
}: {
	accounts: Array<{ key: string; value: LocalStorage }>;
}) => {
	return (
		<div className="flex h-screen w-screen flex-col">
			<div className="flex h-fit w-full justify-end p-2">
				<span className="font-heads text-primary pt-6 text-7xl font-medium tracking-widest">
					DASHBOARD
				</span>
			</div>

			<div className="flex h-full w-full flex-col items-start justify-center pl-10">
				<div className="jus ftify-center relative flex w-fit flex-col items-start">
					<p className="absolute top-0 -z-10 translate-x-[0px] -translate-y-10 rounded-2xl bg-amber-400 p-2 pb-10 text-xl font-bold text-amber-800">
						Accounts
					</p>
					<Card className="h-[100px] w-[250px] rounded-lg border-0 bg-amber-400 py-2">
						<CardContent className="px-2 space-y-2">
							{accounts.map((i, idx) => (
								<div
									key={idx}
									className="w-full rounded-sm bg-amber-600 px-2 py-1 text-lg"
								>
									{i.key}
								</div>
							))}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
