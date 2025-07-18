import type { SetStateAction } from "react";

type CompMapTypes = {
  data: Array<{
    name: string | null;
    default: "mute" | "unmute";
  }>;
  currentComp: number;
  className?: string | undefined;
};
