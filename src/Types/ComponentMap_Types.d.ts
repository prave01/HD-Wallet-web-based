import type { SetStateAction } from "react";

type CompMapTypes = {
	data: Array<{
		name: string | null;
		default: "mute" | "unmute";
	}>;
	currentComp: { name: string; idx: number };
	className?: string | undefined;
	setNext: React.Dispatch<React.SetStateAction<{ name: string; idx: number }>>;
};
