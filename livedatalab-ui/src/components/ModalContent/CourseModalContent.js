import React, { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
	Box,
} from "@mui/material";

function CourseModalContent({ onSubmit, onCancel }) {
	const [courseData, setCourseData] = useState({
		name: "",
		description: "",
		makePublic: false,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCourseData({ ...courseData, [name]: value });
	};

	const handleCheckboxChange = (event) => {
		setCourseData({ ...courseData, makePublic: event.target.checked });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(courseData);
	};

	return (
		<Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
			<Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
				Add New Course
			</Typography>
			<TextField
				name="name"
				label="Course Name"
				fullWidth
				value={courseData.name}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="description"
				label="Course Description"
				fullWidth
				multiline
				rows={3}
				value={courseData.description}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<FormControlLabel
				control={
					<Checkbox
						checked={courseData.makePublic}
						onChange={handleCheckboxChange}
					/>
				}
				label="Make Course Available to Public"
				sx={{ mb: 2 }}
			/>{" "}
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

export default CourseModalContent;
