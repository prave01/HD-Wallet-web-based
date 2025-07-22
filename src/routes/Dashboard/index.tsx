import { CreateWallet } from "@/Actions/CreateWallet.server";
import Dashboard from "@/Components/Pages/Dashboard";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/Dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const data: LocalStorage = JSON.parse(
    localStorage.getItem("mobswallet") || "",
  );
  console.log("wallets", data.totalWallets);

  return (
    <div className="text-wrap text-black">
      {data.totalWallets}
      <Dashboard />
    </div>
  );
}
