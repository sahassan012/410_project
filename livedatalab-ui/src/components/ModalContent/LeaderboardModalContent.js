import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

function LeaderboardModalContent({ onSubmit }) {
	const [leaderboardData, setLeaderboardData] = useState({
		description: "",
		maxScore: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLeaderboardData({ ...leaderboardData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(leaderboardData);
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Typography variant="h6">Create a New Leaderboard</Typography>
			<TextField
				name="description"
				label="Description"
				fullWidth
				value={leaderboardData.description}
				onChange={handleChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="maxScore"
				label="Max Score"
				fullWidth
				value={leaderboardData.maxScore}
				onChange={handleChange}
				sx={{ mb: 2 }}
			/>
			<Button type="submit" variant="contained" color="primary">
				Create
			</Button>
		</Box>
	);
}

export default LeaderboardModalContent;
