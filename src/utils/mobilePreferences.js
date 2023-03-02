import { Preferences } from '@capacitor/preferences';

export const setKey = async (key, data) => {
	try {
		await Preferences.set({
			key: key,
			value: JSON.stringify(data),
		});
	} catch (error) {
		console.error(`Error setting auth info: ${error}`);
	}
};

export const getKey = async (key) => {
	try {
		const { value } = await Preferences.get({ key: key });
		if (value) {
			return JSON.parse(value);
		}
		return null;
	} catch (error) {
		console.error(`Error getting auth info: ${error}`);
		return null;
	}
};

export const removeKey = async (key) => {
	try {
		await Preferences.remove({ key: key });
	} catch (error) {
		console.error(`Error removing auth info: ${error}`);
	}
};
