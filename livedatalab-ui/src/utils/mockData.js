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

export const authenticateUser = (username, password) => {
	return users.some(
		(user) => user.username === username && user.password === password
	);
};
