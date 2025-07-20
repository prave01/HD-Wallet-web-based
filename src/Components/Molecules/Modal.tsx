import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import { AnimatePresence } from "motion/react";
import type React from "react";

const Modal = ({
  className,
  open,
  setOpen,
  children,
}: {
  className: string;
  open: boolean;
  setOpen: (message: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      onKeyPress={(e) => e.key == "q" && setOpen(false)}
      className={cn(
        "absolute z-50 h-screen w-screen items-center justify-center bg-black/60",
        className,
        `${open ? "flex" : "hidden"}`,
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              // translateZ: 1000,
              // translateY: 500,
              // translateX: 500,
              scale: 0.2,
            }}
            animate={
              open
                ? { translateZ: 0, translateY: 0, translateX: 0, scale: 1 }
                : { scale: 0.5, translateY: 500, translateX: 500 }
            }
            transition={{
              // translateX: { duration: 1, ease: "easeOut" },
              // translateY: { duration: 1, ease: "easeOut" },
              // translateZ: { duration: 1, ease: "easeOut" },
              // opacity: { delay: 1, duration: 0.5 },
              scale: { delay: 0.2, duration: 0.4, type: "tween" },
            }}
            className="h-[95%] w-[95%] rounded-xl border-2 border-amber-600 bg-black/40  backdrop-blur-2xl"
          >
            {" "}
            <Button
              onClick={() => setOpen(false)}
              className="text-primary absolute z-10 top-0 right-0 mt-2 mr-2 cursor-pointer border-2 border-amber-600 bg-amber-700 text-lg font-medium hover:bg-transparent hover:text-amber-200"
            >
              {" "}
              Close{" "}
            </Button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Modal;
