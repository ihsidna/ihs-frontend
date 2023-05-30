export const capitalizeString = (string) => {
	if (!string) {
		return '';
	}
	const firstCharacter = string.charAt(0).toUpperCase();
	const remainingCharacters = string.slice(1);
	return firstCharacter + remainingCharacters;
}
