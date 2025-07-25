import { mnemonicToSeedSync } from "bip39";
import Decrypt from "../Crypto/Decrypt.server.ts";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

export async function CreateWallet(
	localData: LocalStorage,
): Promise<Array<string>> {
	try {
		const data = await Decrypt("Praveen@10", localData);

		const seed = mnemonicToSeedSync(data); // keep as Buffer

		const pubKeys: Array<string> = [];

		if (localData.coinType === "sol" && localData.totalWallets > 0) {
			for (let i = 0; i < localData.totalWallets; i++) {
				const derivationPath = `m/44'/501'/${i}'/0'`;
				const derivedSeed = derivePath(
					derivationPath,
					seed.toString("hex"),
				).key;
				const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
				pubKeys.push(Keypair.fromSecretKey(secret).publicKey.toBase58());
			}
			return pubKeys;
		}

		return [];
	} catch (error) {
		console.error("CreateWallet error:", error);
		return [];
	}
}
