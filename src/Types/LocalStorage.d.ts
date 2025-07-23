type LocalStorage = {
	cipherText: string;
	nonce: string;
	kdf: string;
	salt: string;
	digest: string;
	iterations: number;
	totalWallets: number;
	coinType: "sol" | "eth";
};
