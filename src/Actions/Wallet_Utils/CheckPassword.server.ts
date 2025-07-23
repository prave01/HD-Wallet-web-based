import { GetAccountPublicKeys } from "./GetKeys.server.ts";

export async function CheckPassword(localData: LocalStorage, password: string) {
	const getPubKeys = await GetAccountPublicKeys(localData, password);

	if (getPubKeys) {
		console.log("Logged In ✅");
		return true;
	}
	console.error("Wrong Password ⛔");
	return false;
}
