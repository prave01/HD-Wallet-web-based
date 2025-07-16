"use client";

import { generateWalletMnemonic } from "@/Actions/GetMnumonics_Server.server";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";
import { CheckIcon, CopyIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

const GenerateMnemonics = () => {
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchMnemonic = async () => {
      const result = await generateWalletMnemonic();
      setMnemonic(result.split(" "));
    };
    fetchMnemonic();
  }, []);

  const handleCopy = async () => {
    try {
     copy(mnemonic.join(" "));
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Card className="text-secondary h-fit w-auto rounded-sm border-0 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
      <CardTitle className="text-primary w-fit rounded-lg bg-amber-900 px-2 py-2 text-xl font-semibold">
        Generate Mnemonics
      </CardTitle>
      <CardContent className="grid h-auto w-full grid-cols-6 items-center justify-center gap-x-2 gap-y-3 align-middle">
        {mnemonic.map((item: string, idx: number) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              opacity: { type: "tween", bounce: 0.1, delay: idx / 10 + 0.8 },
            }}
            key={idx}
            className="text-primary w-auto rounded-lg border-2 border-amber-950 p-2 text-center text-lg"
          >
            {item}
          </motion.div>
        ))}
      </CardContent>
      <CardFooter className="w-fit">
        <Button
          onClick={handleCopy}
          className="text-primary cursor-pointer rounded-lg bg-yellow-600 p-2 text-center hover:bg-gray-600"
        >
          {" "}
          {copied ? "Copied!" : "Copy"}
          {copied ? (
            <CheckIcon className="h-10 w-10" />
          ) : (
            <CopyIcon className="h-10 w-10" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GenerateMnemonics;
