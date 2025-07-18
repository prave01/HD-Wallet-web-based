import Crypto from "crypto";

const DerivationKey = async (
	password: string,
	iterations: number,
	keyLength: number,
	digest: string,
	salt: Uint8Array,
): Promise<any> => {
	const derive = () =>
		new Promise((resolve, reject) =>
			Crypto.pbkdf2(
				password,
				salt,
				iterations,
				keyLength,
				digest,
				(err, key) => (err ? reject(err) : resolve(key)),
			),
		);

	return derive;
};

export default DerivationKey
