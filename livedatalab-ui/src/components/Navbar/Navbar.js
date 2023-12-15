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
import logo from "../../assets/logo.png";

function Navbar({ setActiveSection }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/");
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<img src={logo} alt="LiveDataLab Logo" style={{ width: "50px" }} />{" "}
				</IconButton>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					LiveDataLab
				</Typography>
				<Button color="inherit" onClick={() => setActiveSection("projects")}>
					Home
				</Button>
				<Button color="inherit" onClick={handleLogout}>
					Log Out
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
