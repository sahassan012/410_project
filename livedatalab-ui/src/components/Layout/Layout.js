import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
import SecondaryNav from "../SecondaryNav/SecondaryNav";
import { Grid } from "@mui/material";

function Layout() {
	const [activeSection, setActiveSection] = useState("projects"); // Default to 'projects'

	return (
		<div>
			<Navbar />
			<Grid container spacing={10}>
				<Grid item xs={2}>
					<SecondaryNav setActiveSection={setActiveSection} />
				</Grid>
				<Grid item xs={10}>
					<MainContent activeSection={activeSection} />
				</Grid>
			</Grid>
		</div>
	);
}

export default Layout;
