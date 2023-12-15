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

function ProjectModalContent({ onSubmit, onCancel }) {
	const [projectData, setProjectData] = useState({
		name: "",
		description: "",
		readme: null,
		starterFiles: null,
		course: "",
		autoRecommend: false,
	});

	const handleInputChange = (event) => {
		const { name, value, files } = event.target;
		if (name === "readme" || name === "starterFiles") {
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
				Add New Project
			</Typography>
			<TextField
				name="name"
				label="Project Name"
				fullWidth
				value={projectData.name}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="description"
				label="Short Description"
				fullWidth
				multiline
				rows={2}
				value={projectData.description}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<Button variant="contained" component="label" sx={{ mb: 2 }}>
				Project README
				<input type="file" hidden onChange={handleInputChange} name="readme" />
			</Button>
			<Button variant="contained" component="label" sx={{ mb: 2 }}>
				Project Starter Files (.zip only)
				<input
					type="file"
					hidden
					accept=".zip"
					onChange={handleInputChange}
					name="starterFiles"
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
			<Box display="flex" justifyContent="space-between">
				<Button variant="outlined" color="secondary" onClick={onCancel}>
					Cancel
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Create
				</Button>
			</Box>
		</Box>
	);
}

export default ProjectModalContent;
