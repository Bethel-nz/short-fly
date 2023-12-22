export const generateUniqueID = () => {
	const characters = [
		...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
	];

	const randomLength = Math.floor(Math.random() * 3) + 5;
	const randomChars = Array.from(
		{ length: randomLength },
		() => characters[Math.floor(Math.random() * characters.length)]
	);

	return `SF${randomChars.join('')}`;
};
