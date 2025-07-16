"use client";

import { generateWalletMnemonic } from "@/Actions/GetMnumonics_Server.server";
import { useEffect, useState } from "react";
const GenerateMnemonics = () => {
  const [mnemonic, setMnemonic] = useState<any>();
  useEffect(() => {
    const fetchMnemonic = async () => {
      const result = await generateWalletMnemonic();
      setMnemonic(result);
    };
    fetchMnemonic();
  }, []);

  return <div className="text-primary"></div>;
};

export default GenerateMnemonics;
