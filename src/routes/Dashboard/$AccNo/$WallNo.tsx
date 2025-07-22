import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Dashboard/$AccNo/$WallNo")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useParams();
  return <div>Hello</div>;
}
