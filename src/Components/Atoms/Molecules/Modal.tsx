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
      className={cn(
        "absolute z-50 h-screen w-screen items-center justify-center bg-black/60",
        className,
        `${open ? "flex" : "hidden"}`,
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ translateY: 500, translateX: 500, scale: 0.5 }}
            animate={
              open
                ? { translateY: 0, translateX: 0, scale: 1 }
                : { scale: 0.5, translateY: 500, translateX: 500 }
            }
            transition={{
              translateX: { duration: 1, ease: "easeOut" },
              translateY: { duration: 1, ease: "easeOut" },
              opacity: { delay: 1.2, duration: 0.5 },
              scale: { delay: 1.2, duration: 0.5, type: "tween" },
            }}
            className="h-[95%] w-[95%] rounded-xl border-2 border-amber-600 bg-black/40 backdrop-blur-2xl"
          >
            {" "}
            <Button
              onClick={() => setOpen(false)}
              className="text-primary absolute top-0 right-0 mt-2 mr-2 cursor-pointer border-2 border-amber-600 bg-amber-700 text-lg font-medium hover:bg-transparent"
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
