import Decrypt from "./Crypto/Decrypt.server.ts";

export async function CreateWallet(localData: LocalStorage) {
  const data = await Decrypt("Praveen@10032004", localData);
}
