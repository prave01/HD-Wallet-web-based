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
import { cn } from "@/lib/utils";
import { PulseLoader } from "react-spinners";

const GenerateMnemonics = () => {
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [loader, setLoader] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  async function fetchMnemonic() {
    setLoader(true);
    const result = await generateWalletMnemonic();
    setMnemonic(result.split(" "));
    setLoader(false);
  }

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
    <Card className="text-secondary h-fit w-auto rounded-md border-2 border-amber-950 bg-amber-100/10 p-6 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
      <CardTitle className="flex items-center justify-between">
        <span className="text-primary w-fit rounded-lg bg-amber-700/50 px-2 py-2 text-xl font-semibold">
          Generate Mnemonics
        </span>
        <span className="h-full align-bottom text-sm font-bold wrap-anywhere text-red-600">
          Please copy these phrases and store <br />
          safely for wallet recovery.
        </span>
      </CardTitle>
      <CardContent className="flex min-h-[110px] min-w-[600px] items-center justify-center">
        {buttonClicked == false && (
          <Button
            onClick={() => {
              setButtonClicked(true);
              fetchMnemonic();
            }}
            className={`${loader ? "hidden" : "flex"
              } text-primary cursor-pointer rounded-lg border-2 border-amber-700 bg-transparent p-2 font-semibold hover:bg-transparent`}
          >
            Generate Mnemonics
          </Button>
        )}
        {loader ? (
          <PulseLoader color="#fa6b05" />
        ) : (
          <div className="grid h-auto grid-cols-6 items-center justify-center gap-x-2 gap-y-3 align-middle">
            {mnemonic.map((item: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  opacity: {
                    type: "tween",
                    bounce: 0.1,
                    delay: idx / 10 + 0.8,
                  },
                }}
                className="text-primary w-auto rounded-lg border-2 border-amber-950 p-2 text-center text-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        )}{" "}
      </CardContent>
      <CardFooter className="flex h-auto w-full items-center justify-between">
        <Button
          disabled={buttonClicked ? false : true}
          onClick={handleCopy}
          className="text-primary w-25 cursor-pointer rounded-lg bg-yellow-600 p-4 text-center hover:bg-gray-600 hover:text-amber-200"
        >
          {" "}
          {copied ? "Copied!" : "Copy"}
          {copied ? (
            <CheckIcon className="h-10 w-10" />
          ) : (
            <CopyIcon className="h-10 w-10" />
          )}
        </Button>
        <Button
          disabled={buttonClicked ? false : true}
          className="text-primary w-20 cursor-pointer rounded-lg bg-yellow-600 p-4 text-center hover:bg-gray-600 hover:text-amber-200"
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GenerateMnemonics;
