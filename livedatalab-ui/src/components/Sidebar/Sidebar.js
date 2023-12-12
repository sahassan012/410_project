import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

function Sidebar() {
	return (
		<div>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem button>
					<ListItemText primary="Project 1" />
				</ListItem>
			</List>
			<Divider />
			<List component="nav" aria-label="secondary mailbox folders">
				<ListItem button>
					<ListItemText primary="Linked Account 1" />
				</ListItem>
			</List>
		</div>
	);
}

export default Sidebar;
