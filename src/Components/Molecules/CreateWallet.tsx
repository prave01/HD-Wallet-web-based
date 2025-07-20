import { Encrypt } from "@/Actions/Crypto/Encrypt.server";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";

const CreateWallet = ({
  mnemonics,
  password,
}: {
  mnemonics: string;
  password: string;
}) => {
  const [isEncrypting, setIsEncrypting] = useState<boolean>(false);

  const [isStoring, setIsStoring] = useState<boolean>(false);

  useEffect(() => {
    if (!password || !mnemonics) return;

    const encryptData = async () => {
      setIsEncrypting(true);

      try {
        const encrypted = await Encrypt(password, mnemonics);
        setIsEncrypting(false);

        setIsStoring(true);
        localStorage.setItem("mobswallet", JSON.stringify(encrypted));
        setIsStoring(false);
      } catch (err) {
        console.error("Encryption error:", err);
        setIsEncrypting(false);
        setIsStoring(false);
      }
    };

    encryptData();
  }, [password, mnemonics]);

  return (
    <div className="flex h-auto w-[300px] flex-col items-center justify-center gap-y-6 text-xl text-orange-800">
      <motion.div
        initial={{ translateY: 4, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex w-full items-center justify-center space-x-3 rounded-lg bg-amber-600 px-5 py-2"
      >
        <span>Step 1: Encrypting</span>
        {isEncrypting ? <SyncLoader color="#fff" size={6} /> : <CheckIcon />}
      </motion.div>
      <motion.div
        initial={{ translateY: 5, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={cn(
          !isEncrypting ? "flex" : "hidden",
          "w-full items-center justify-center space-x-3 rounded-lg bg-amber-600 px-5 py-2",
        )}
      >
        <span>Step 2: Storing locally</span>
        {isStoring ? <SyncLoader color="#fff" size={6} /> : <CheckIcon />}
      </motion.div>
      <motion.div
        initial={{ translateY: 5, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={cn(
          !isEncrypting && !isStoring ? "flex" : "hidden",
          "roundedl-xl border-amber-300 text-white",
        )}
      >
        <Button onClick={} className="roundedl-lg cursor-pointer border-2 border-amber-300 hover:text-amber-400 bg-amber-600/90 text-lg font-bold text-amber-900 hover:bg-black/70">
          Go to wallet
        </Button>
      </motion.div>
    </div>
  );
};

export default CreateWallet;
