import type { SetStateAction } from "react";

type CompMapTypes = {
  data: Array<{
    name: string;
  }>;
  currentComp: number | null;
  className?: string | undefined;
};
