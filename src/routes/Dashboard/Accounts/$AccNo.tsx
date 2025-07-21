import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Dashboard/Accounts/$AccNo")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useParams();
  return <div>Hello {data.AccNo}</div>;
}
