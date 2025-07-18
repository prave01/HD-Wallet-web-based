import { randomBytes, secretbox } from "tweetnacl";
import bs58 from "bs58";
import DerivationKey from "./DeriveEncrytionKey";

export default async function Encrypt(password: string, mnemonic_text: string) {
	const iterations = 600000;
	const digest = "sha256";
	const kdf = "pbkdf2";
	const keyLength = secretbox.keyLength;
	const salt = randomBytes(16);

	const Key = await DerivationKey(
		password,
		keyLength,
		iterations,
		digest,
		salt,
	);

	const nonce = randomBytes(secretbox.nonceLength);

	const CipherText = secretbox(Buffer.from(mnemonic_text), nonce, Key);

	return {
		cipherText: bs58.encode(CipherText),
		nonce: bs58.encode(nonce),
		kdf,
		salt: bs58.encode(salt),
		digest,
		iterations,
	};
}
