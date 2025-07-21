import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/Dashboard/Accounts/$AccNo")({
	component: RouteComponent,
	loader: ({ params }) => {
		return params.AccNo;
	},
});

function RouteComponent() {
	const data = useLoaderData({from:"/Dashboard/Accounts/$AccNo"});
	return <div>Hello {data}</div>;
}
