import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

function LinkedAccountsModalContent({ onSubmit, onCancel }) {
	const [linkedAccountData, setLinkedAccountData] = useState({
		hostDomain: "",
		hostUsername: "",
		apiKey: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLinkedAccountData({ ...linkedAccountData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(linkedAccountData);
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Typography variant="h6">Link a New Account</Typography>
			<TextField
				name="hostDomain"
				label="Host Domain"
				fullWidth
				value={linkedAccountData.hostDomain}
				onChange={handleChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="hostUsername"
				label="Host Username"
				fullWidth
				value={linkedAccountData.hostUsername}
				onChange={handleChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="apiKey"
				label="API Key"
				fullWidth
				value={linkedAccountData.apiKey}
				onChange={handleChange}
				sx={{ mb: 2 }}
			/>
			<Box display="flex" justifyContent="space-between">
				<Button variant="outlined" color="secondary" onClick={onCancel}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Link
				</Button>
			</Box>
		</Box>
	);
}

export default LinkedAccountsModalContent;
