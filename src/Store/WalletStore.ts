import { create } from "zustand";

type WalletStore = {
	accounts: Record<string, string>; // { accountId: mnemonic }
	setMnemonic: (accountId: string, mnemonic: string) => void;
	removeMnemonic: (accountId: string) => void;
	clearAll: () => void;
};

export const useWalletStore = create<WalletStore>((set) => ({
	accounts: {},
	setMnemonic: (id, mnemonic) =>
		set((state) => ({
			accounts: {
				...state.accounts,
				[id]: mnemonic,
			},
		})),
	removeMnemonic: (id) =>
		set((state) => {
			const copy = { ...state.accounts };
			delete copy[id];
			return { accounts: copy };
		}),
	clearAll: () => set({ accounts: {} }),
}));
