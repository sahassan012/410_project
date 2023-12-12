import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

function SecondaryNav({ setActiveSection }) {
	const theme = useTheme();
	const useStyles = makeStyles({
		root: {
			width: 320,
			backgroundColor: theme.palette.background.paper,
		},
		listItem: {
			padding: theme.spacing(2),
			margin: theme.spacing(1),
			"&:hover": {
				backgroundColor: theme.palette.action.hover,
				borderRadius: theme.shape.borderRadius,
			},
		},
	});
	const classes = useStyles();
	const handleListItemClick = (section) => {
		console.log("setting active section " + section);
		setActiveSection(section);
	};

	return (
		<List
			component="nav"
			className={classes.root}
			aria-label="secondary mailbox folders"
		>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => handleListItemClick("projects")}
			>
				<ListItemText primary="Projects" />
			</ListItem>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => handleListItemClick("leaderboard")}
			>
				<ListItemText primary="Leaderboard" />
			</ListItem>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => handleListItemClick("courses")}
			>
				<ListItemText primary="Courses" />
			</ListItem>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => handleListItemClick("submissions")}
			>
				<ListItemText primary="Submissions" />
			</ListItem>
			<ListItem
				button
				className={classes.listItem}
				onClick={() => handleListItemClick("manage linked accounts")}
			>
				<ListItemText primary="Manage Linked Accounts" />
			</ListItem>
		</List>
	);
}

export default SecondaryNav;
