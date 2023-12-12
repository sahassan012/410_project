import React, { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
} from "@mui/material";

function ProjectModalContent({ onSubmit }) {
	const [projectData, setProjectData] = useState({
		projectName: "",
		projectDescription: "",
		projectReadme: null,
		projectStarterFiles: null,
		course: "",
		autoRecommend: false,
	});

	const handleInputChange = (event) => {
		const { name, value, files } = event.target;
		if (name === "projectReadme" || name === "projectStarterFiles") {
			setProjectData({ ...projectData, [name]: files[0] });
		} else {
			setProjectData({ ...projectData, [name]: value });
		}
	};

	const handleCheckboxChange = (event) => {
		setProjectData({ ...projectData, autoRecommend: event.target.checked });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(projectData);
	};

	return (
		<Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
			<Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
				Create a New Project
			</Typography>
			<TextField
				name="projectName"
				label="Project Name"
				fullWidth
				value={projectData.projectName}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="projectDescription"
				label="Short Description"
				fullWidth
				multiline
				rows={2}
				value={projectData.projectDescription}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<Button variant="contained" component="label" sx={{ mb: 2 }}>
				Project README
				<input
					type="file"
					hidden
					onChange={handleInputChange}
					name="projectReadme"
				/>
			</Button>
			<Button variant="contained" component="label" sx={{ mb: 2 }}>
				Project Starter Files (.zip only)
				<input
					type="file"
					hidden
					accept=".zip"
					onChange={handleInputChange}
					name="projectStarterFiles"
				/>
			</Button>
			<FormControl fullWidth sx={{ mb: 2 }}>
				<InputLabel>Course (optional)</InputLabel>
				<Select
					name="course"
					value={projectData.course}
					label="Course (optional)"
					onChange={handleInputChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value="course1">Course 1</MenuItem>
				</Select>
			</FormControl>
			<FormControlLabel
				control={
					<Checkbox
						checked={projectData.autoRecommend}
						onChange={handleCheckboxChange}
					/>
				}
				label="Auto-Recommend Learning Materials"
				sx={{ mb: 2 }}
			/>
			<Button type="submit" variant="contained" color="primary">
				Create
			</Button>
		</Box>
	);
}

export default ProjectModalContent;
