import { cn } from "@/lib/utils";
import type { CompMapTypes } from "@/Types/ComponentMap_Types";

const ComponentMap = ({ className, data, currentComp }: CompMapTypes) => {
  return (
    <div
      className={cn(
        className,
        "text-primary flex items-center justify-between gap-2",
      )}
    >
      <div className="flex w-full gap-2">
        {" "}
        {data.map((i, idx) => (
          <div
            className={cn(
              currentComp == idx ? "bg-amber-800" : "bg-transparent",
              "text-secondary w-auto rounded-lg border-2 border-amber-950 px-4 py-2 font-semibold",
            )}
          >
            {i.name}
          </div>
        ))}
      </div>
      {/* <Button */}
      {/*   disabled={data.length == currentComp.idx + 1} */}
      {/*   onClick={() => */}
      {/*     //@ts-ignore */}
      {/*     setNext((prev) => ({ */}
      {/*       name: data[prev.idx + 1].name, */}
      {/*       idx: prev.idx + 1, */}
      {/*     })) */}
      {/*   } */}
      {/*   className="text-semibold text-md cursor-pointer bg-amber-600 px-6 py-4 text-amber-950 hover:bg-amber-800 hover:text-white" */}
      {/* > */}
      {/*   Next */}
      {/* </Button> */}
    </div>
  );
};

export default ComponentMap;
