import { GetAccountPublicKeys } from "./GetKeys.server.ts";

export async function CheckPassword(
	localData: LocalStorage,
	password: string,
): Promise<boolean> {
	console.log("CheckPassword started");
	try {
		const getPubKeys = await GetAccountPublicKeys(localData, password);

		if (getPubKeys) {
			if (Array.isArray(getPubKeys) && getPubKeys.length > 0) {
				return true;
			} else {
				return false;
			}
		}
		return false;
	} catch (error) {
		return false;
	}
}
