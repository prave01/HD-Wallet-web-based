"use server";
import { generateMnemonic } from "bip39";

export async function generateWalletMnemonic() {
  const mnemonic = generateMnemonic();
  console.log(mnemonic)

  console.log("fuck")
  return mnemonic;
}
