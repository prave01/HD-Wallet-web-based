import { CreateWallet } from "@/Actions/CreateWallet.server";
import Dashboard from "@/Components/Pages/Dashboard";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/Dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = JSON.parse(localStorage.getItem("mobswallet") || "");
  console.log(data);
  useEffect(() => {
    (async () => {
      await CreateWallet(data);
    })();
  }, []);
  return (
    <div className="text-wrap">
      {}
      <Dashboard />
    </div>
  );
}
