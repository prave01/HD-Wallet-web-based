import Dashboard from "@/Components/Pages/Dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Dashboard/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Dashboard />
		</div>
	)
}
