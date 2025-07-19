import nacl from "tweetnacl";
import bs58 from "bs58";
import DerivationKey from "./DeriveEncryptionKey.server.ts";

export async function Encrypt(password: string, mnemonic_text: string) {
	const iterations = 600000;
	const digest = "sha256";
	const kdf = "pbkdf2";
	const keyLength = nacl.secretbox.keyLength;
	const salt = nacl.randomBytes(16);

	const Key = await DerivationKey(
		password,
		iterations,
		keyLength,
		digest,
		salt,
	);

	const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
	const encoder = new TextEncoder();
	const plaintextBytes = encoder.encode(mnemonic_text);

	const CipherText = nacl.secretbox(plaintextBytes, nonce, Key);

	return {
		cipherText: bs58.encode(CipherText),
		nonce: bs58.encode(nonce),
		kdf,
		salt: bs58.encode(salt),
		digest,
		iterations,
	};
}
