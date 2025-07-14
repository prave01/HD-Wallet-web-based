import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";

const CreatePassword = () => {
	return (
		<div className="h-full w-full px-4 pt-20">
			<Card className="text-secondary bg-cardbg h-fit w-[500px] rounded-sm text-xl font-semibold">
				<CardHeader>
					<CardTitle>Yow, Create a secure password</CardTitle>
					<CardDescription>Card Description</CardDescription>
					<CardAction className="rounded-full text-lg -translate-y-5 border-2 border-green-800 p-1 px-2 text-green-500">

						Ongoing
					</CardAction>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default CreatePassword;
