import { secretbox } from "tweetnacl";
import bs58 from "bs58";
import DerivationKey from "./DeriveEncryptionKey.server";

export default async function Decrypt(
	password: string,
	cipherObj: Payload,
): Promise<{ status: number; response: string }> {
	const cipherText = bs58.decode(cipherObj.cipherText);
	const iterations = cipherObj.iterations;
	const salt = bs58.decode(cipherObj.salt);
	const nonce = bs58.decode(cipherObj.nonce);
	const keyLength = cipherObj.keyLength;
	const digest = cipherObj.digest;

	const key = await DerivationKey(
		password,
		iterations,
		keyLength,
		digest,
		salt,
	);

	const plainText = secretbox.open(cipherText, nonce, key);

	if (!plainText) {
		console.log("Incorrect Password");
		return { status: 401, response: "Incorrect Password" };
	}

	const mnemonics = Buffer.from(plainText).toString();
	return { status: 200, response: mnemonics };
}
