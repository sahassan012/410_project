import React, { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
	Box,
} from "@mui/material";

function CourseModalContent({ onSubmit }) {
	const [courseData, setCourseData] = useState({
		courseName: "",
		courseDescription: "",
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
				Create a New Course
			</Typography>
			<TextField
				name="courseName"
				label="Course Name"
				fullWidth
				value={courseData.courseName}
				onChange={handleInputChange}
				sx={{ mb: 2 }}
			/>
			<TextField
				name="courseDescription"
				label="Course Description"
				fullWidth
				multiline
				rows={3}
				value={courseData.courseDescription}
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
			/>
			<Button type="submit" variant="contained" color="primary">
				Create
			</Button>
		</Box>
	);
}

export default CourseModalContent;
