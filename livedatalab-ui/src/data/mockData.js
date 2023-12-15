export const mockProjects = [
	{
		id: 1,
		name: "Project Alpha",
		description: "Description for Project Alpha",
		course: "CS 410",
	},
	{
		id: 2,
		name: "Project Beta",
		description: "Description for Project Beta",
		course: "CS 427",
	},
];

export const mockCourses = [
	{ id: 1, name: "Course Alpha", description: "Description for Course Alpha" },
	{ id: 2, name: "Course Beta", description: "Description for Course Beta" },
];

export const mockLeaderboard = [
	{
		id: 1,
		description: "Leaderboard 1 ",
		maxScore: 200,
		leaderboardScores: [
			{ rank: "1", username: "BobLee", submission: "3", score: "100" },
			{ rank: "2", username: "Livvy", submission: "4", score: "98" },
			{ rank: "3", username: "DylanX", submission: "1", score: "94" },
			{ rank: "4", username: "Jessica11", submission: "1", score: "89" },
			{ rank: "5", username: "Juan99", submission: "3", score: "88" },
			{ rank: "6", username: "Ali123", submission: "4", score: "88" },
			{ rank: "7", username: "Peter11", submission: "1", score: "85" },
			{ rank: "8", username: "John11", submission: "1", score: "70" },
		],
	},
	{
		id: 2,
		description: "Leaderboard 2 ",
		maxScore: 100,
		leaderboardScores: [
			{ rank: "1", username: "John11", submission: "3", score: "100" },
			{ rank: "2", username: "Juan99", submission: "4", score: "95" },
			{ rank: "3", username: "DylanX", submission: "1", score: "92" },
			{ rank: "4", username: "Ali123", submission: "1", score: "81" },
			{ rank: "5", username: "Livvy", submission: "3", score: "80" },
			{ rank: "6", username: "Jessica11", submission: "4", score: "79" },
			{ rank: "7", username: "Peter11", submission: "1", score: "65" },
			{ rank: "8", username: "BobLee", submission: "1", score: "40" },
		],
	},
];

export const mockLinkedAccounts = [
	{
		id: 1,
		userName: "johnab@github.com",
		domain: "github",
		apiKey: "qpoiweurqweiwef",
	},
	{
		id: 2,
		userName: "sabob@github.com",
		domain: "github",
		apiKey: "lkajshhfasldkfj",
	},
];

export const mockSubmissions = [
	{
		id: 1,
		user: "Account1",
		githubRepo: "github.com/johnab/MP3.2_git",
		time: "9/22/2023, 7:07:10 AM",
		submissionNumber: 1,
	},
	{
		id: 2,
		user: "Account2",
		githubRepo: "github.com/johnab/MP3.2_git",
		time: "9/22/2023, 7:09:10 AM",
		submissionNumber: 3,
	},
];
