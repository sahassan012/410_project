import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function MainContent({ activeSection }) {
	let content;
	switch (activeSection) {
		case "projects":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Projects
						</Typography>
					</CardContent>
				</Card>
			);
			break;
		case "leaderboard":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Leaderboard
						</Typography>
					</CardContent>
				</Card>
			);
			break;
		case "courses":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Courses
						</Typography>
					</CardContent>
				</Card>
			);
			break;
		case "manage-linked-accs":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Manage Linked Accounts
						</Typography>
					</CardContent>
				</Card>
			);
			break;
		default:
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Homepage
						</Typography>
					</CardContent>
				</Card>
			);
	}
	return <main>{content}</main>;
}

export default MainContent;
