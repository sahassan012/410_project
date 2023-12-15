import React from "react";
import { useNavigate } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import { getCurrentUser } from "../../utils/mockData";

function Navbar({ setActiveSection }) {
	const username = getCurrentUser();
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/");
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<InsightsIcon style={{ fontSize: 50, color: "inherit" }} />

				<Typography
					variant="h5"
					style={{ flexGrow: 1, marginLeft: 5, fontWeight: 800 }}
				>
					LiveDataLab
				</Typography>
				<Button color="inherit" onClick={() => setActiveSection("projects")}>
					Home
				</Button>
				<Button
					color="inherit"
					style={{ marginRight: 5 }}
					onClick={handleLogout}
				>
					Log Out
				</Button>
				<Typography style={{ marginRight: 20, fontWeight: 600 }}>
					{username}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
