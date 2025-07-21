import Background from "@/Components/Background/Background";
import Morning from "@/Components/Template/Morning";
import Night from "@/Components/Template/Night";
import { cn } from "@/lib/utils";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "motion/react";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const RootRoute = () => {
	const [globalTheme, setTheme] = useState("light");

	useHotkeys("alt+t", () => {
		globalTheme == "light" ? setTheme("dark") : setTheme("light");
	});

	const handleClick = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<>
			<div
				className={cn(
					globalTheme,
					"relative h-screen w-screen overflow-hidden",
				)}
			>
				<div className="absolute -z-40 h-full w-full">
					<Background key={globalTheme} theme={globalTheme} />
				</div>
				<motion.div
					onClick={handleClick}
					className="absolute z-50 cursor-pointer pt-14 pl-5"
				>
					{globalTheme === "light" ? <Morning /> : <Night />}
				</motion.div>
				<Outlet />
			</div>
			<TanStackRouterDevtools />
		</>
	);
};

export const Route = createRootRoute({
	component: RootRoute,
});
