import nacl from "tweetnacl";
import bs58 from "bs58";
import DerivationKey from "./DeriveEncryptionKey.server.ts";

export default async function Decrypt(
	password: string,
	cipherObj: LocalStorage,
): Promise<string | Error> {
	try {
		const cipherText = bs58.decode(cipherObj.cipherText);
		const iterations = cipherObj.iterations;
		const salt = bs58.decode(cipherObj.salt);
		const nonce = bs58.decode(cipherObj.nonce);
		const keyLength = nacl.secretbox.keyLength;
		const digest = cipherObj.digest;

		const key = await DerivationKey(
			password,
			iterations,
			keyLength,
			digest,
			salt,
		);

		if (!(key instanceof Uint8Array)) {
			throw new Error("Internal Error: Invalid key type");
		}
		const plainText = nacl.secretbox.open(cipherText, nonce, key);
		if (!plainText) {
			throw new Error("Incorrect Password");
		}
		const mnemonics = Buffer.from(plainText).toString();
		return mnemonics;
	} catch (error) {
		console.error(error);
		return new Error(String(error));
	}
}
