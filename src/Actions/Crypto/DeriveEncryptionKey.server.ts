import Crypto from "crypto";

const DerivationKey = async (
	password: string,
	iterations: number,
	keyLength: number,
	digest: string,
	salt: Uint8Array,
): Promise<Uint8Array> => {
	const derive = () =>
		new Promise<Buffer>((resolve, reject) =>
			Crypto.pbkdf2(
				password,
				salt,
				iterations,
				keyLength,
				digest,
				(err, key) => (err ? reject(err) : resolve(key)),
			),
		);

	const keyBuffer = await derive();
	return new Uint8Array(keyBuffer); // 🔁 ensure Uint8Array
};

export default DerivationKey;
