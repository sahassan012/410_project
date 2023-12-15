const users = [
	{
		username: "admin",
		password: "password",
	},
	{
		username: "ali",
		password: "pass",
	},
];
let currentUser = "";

export const addUser = (username, password) => {
	users.push({ username: username, password: password });
};

export const authenticateUser = (username, password) => {
	return users.some(
		(user) => user.username === username && user.password === password
	);
};

export const setCurrentUser = (username) => {
	currentUser = username;
};

export const getCurrentUser = () => {
	return currentUser;
};
