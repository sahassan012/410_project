export const mockProjects = [
	{
		id: 1,
		name: "CS 410 - MP3",
		description: "Description for Project Alpha",
		course: "CS 410",
	},
	{
		id: 2,
		name: "CS 410 - MP2.2",
		description: "Description for Project Beta",
		course: "CS 410",
	},
	{
		id: 3,
		name: "CS 427 - MP2.2",
		description: "Description for Project Beta",
		course: "CS 427",
	},
	{
		id: 4,
		name: "CS 435 - MP6",
		description: "Description for Project Beta",
		course: "CS 435",
	},
	{
		id: 5,
		name: "CS 454 - MP1",
		description: "Description for Project Beta",
		course: "CS 454",
	},

	{
		id: 6,
		name: "CS 411 - MP5",
		description: "Description for Project Beta",
		course: "CS 411",
	},
	{
		id: 7,
		name: "CS 412 - MP4",
		description: "Description for Project Beta",
		course: "CS 412",
	},
];

export const mockCourses = [
	{
		id: 1,
		name: "CS410",
		description:
			"Official Description Theory, design, and implementation of text-based information systems. Text analysis, retrieval models (e.g., Boolean, vector space, probabilistic), text categorization, text filtering, clustering, retrieval system design and implementation, and applications to web information management. Course Information: 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
	},
	{
		id: 2,
		name: "CS427",
		description:
			"Software process, analysis and design. Software development paradigms, system engineering, function-based analysis and design, and object-oriented analysis and design. Course will use team-projects for hands-on exercises. Course Information: Same as CSE 426. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 222, CS 240, CS 241, CS 340, CS 341 or ECE 391.",
	},
	{
		id: 3,
		name: "CS411",
		description:
			"Examination of the logical organization of databases: the entity-relationship model; the hierarchical, network, and relational data models and their languages. Functional dependencies and normal forms. Design, implementation, and optimization of query languages; security and integrity; concurrency control, and distributed database systems. Course Information: 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
	},
	{
		id: 4,
		name: "CS435",
		description:
			"Provides a foundational view of computer networks with a focus on enabling modern large-scale cloud computing. The first part of this course studies the principles upon which the Internet and other networks are built, and how those principles translate into deployed protocols. The second part covers how those principles are applied in network infrastructure for modern clouds, enabling deployment of virtual networks on shared infrastructure, efficient transfer of big data and low latency communication, and federation of applications across countries and continents. Course Information: 3 undergraduate hours. 4 graduate hours. Credit is not given for both CS 435 and CS 438/ECE 438. Prerequisite: One of CS 240, CS 241, CS 340, CS 341 or ECE 391.",
	},
	{
		id: 5,
		name: "CS454",
		description:
			"Focuses on the foundations and basic principles of concurrent programming, covering high-level notions of concurrent correctness and connecting those abstract concepts to real-world programming constructs and algorithms used in practice. Course Information: 3 undergraduate hours. 4 graduate hours. Prerequisite(s): CS 361.",
	},
	{
		id: 6,
		name: "CS412",
		description:
			"Concepts, techniques, and systems of data warehousing and data mining. Design and implementation of data warehouse and on-line analytical processing (OLAP) systems; data mining concepts, methods, systems, implementations, and applications. Course Information: 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
	},
];

export const mockLeaderboard = [
	{
		id: 1,
		description: "CS411 Project 1 Leaderboard",
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
		description: "CS427 Project 3 Leaderboard",
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
	{
		id: 3,
		description: "CS447 Project 1 Leaderboard",
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
		user: "johnab",
		githubRepo: "github.com/johnab/MP3_2.git",
		time: "9/22/2023, 7:07:10 AM",
		submissionNumber: 1,
	},
	{
		id: 2,
		user: "bobdylan",
		githubRepo: "github.com/bobdylan/MP1_private.git",
		time: "10/01/2023, 7:00:10 AM",
		submissionNumber: 2,
	},
	{
		id: 3,
		user: "marshafield",
		githubRepo: "github.com/marshafield/MP2_private.git",
		time: "10/01/2023, 8:09:10 AM",
		submissionNumber: 11,
	},
	{
		id: 4,
		user: "myieshaa2",
		githubRepo: "github.com/myieshaa2/MP2_git",
		time: "10/22/2023, 2:09:10 AM",
		submissionNumber: 20,
	},
	{
		id: 5,
		user: "lupefi",
		githubRepo: "github.com/lupefi/MP2_private.git",
		time: "10/22/2023, 1:09:10 AM",
		submissionNumber: 12,
	},
	{
		id: 6,
		user: "jake11",
		githubRepo: "github.com/jake11/MP1_private.git",
		time: "10/22/2023, 9:09:10 AM",
		submissionNumber: 1,
	},
	{
		id: 7,
		user: "jessicamills",
		githubRepo: "github.com/jessicamills/MP3410_git",
		time: "8/22/2023, 1:10:10 AM",
		submissionNumber: 8,
	},
	{
		id: 8,
		user: "Dillonmark",
		githubRepo: "github.com/Dillonmark/MP5.2_git",
		time: "11/22/2023, 12:09:10 AM",
		submissionNumber: 2,
	},
];
