import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

function LinkedAccountsModalContent({ onSubmit, onCancel }) {
	const [linkedAccountData, setLinkedAccountData] = useState({
		domain: "",
		userName: "",
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
			<Typography variant="h6">Add New Account</Typography>
			<TextField
				name="domain"
				label="Host Domain"
				fullWidth
				value={linkedAccountData.domain}
				onChange={handleChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="userName"
				label="Host Username"
				fullWidth
				value={linkedAccountData.userName}
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
