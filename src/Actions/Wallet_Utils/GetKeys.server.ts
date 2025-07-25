import { mnemonicToSeedSync } from "bip39";
import Decrypt from "../Crypto/Decrypt.server.ts";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

export async function GetAccountPublicKeys(
	localData: LocalStorage,
	password: string,
): Promise<Array<string> | boolean> {
	try {
		const data = await Decrypt(password, localData);

		if (typeof data != "string") {
			throw new Error(data.message);
		}

		const seed = mnemonicToSeedSync(data);

		const pubKeys: Array<string> = [];

		if (localData.coinType === "sol" && localData.totalWallets > 0) {
			for (var i = 0; i < localData.totalWallets; i++) {
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
		return pubKeys;
	} catch (error) {
		console.error(error);
		return false;
	}
}
