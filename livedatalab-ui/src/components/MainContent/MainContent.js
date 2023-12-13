import React, { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Button,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import GenModal from "../GenModal/GenModal";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import {
	mockProjects,
	mockCourses,
	mockLeaderboard,
	mockLinkedAccounts,
	mockSubmissions,
} from "../../data/mockData";
import ProjectsModalContent from "../ModalContent/ProjectsModalContent";
import CourseModalContent from "../ModalContent/CourseModalContent";
import LinkedAccountsModalContent from "../ModalContent/LinkedAccountsModalContent";
import LeaderboardModalContent from "../ModalContent/LeaderboardModalContent";

function MainContent({ activeSection }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [projects, setProjects] = useState(mockProjects);
	const [courses, setCourses] = useState([]);
	const [linkedAccounts, setLinkedAccounts] = useState([]);
	const [leaderboard, setLeaderboard] = useState([]);

	const handleProjectSubmit = (projectData) => {
		setProjects((prevProjects) => [
			...prevProjects,
			{ id: prevProjects.length + 1, ...projectData },
		]);
		setModalOpen(false);
	};

	const handleCourseSubmit = (courseData) => {
		setCourses((prevCourses) => [
			...prevCourses,
			{ id: prevCourses.length + 1, ...courseData },
		]);
		setModalOpen(false);
	};

	const handleLeaderboardSubmit = (leaderboardData) => {
		setLeaderboard((prevLeaderboard) => [
			...prevLeaderboard,
			{ id: prevLeaderboard.length + 1, ...leaderboardData },
		]);
		setModalOpen(false);
	};

	const handleLinkedAccountsSubmit = (linkedAccountData) => {
		setLinkedAccounts((prevAccounts) => [
			...prevAccounts,
			{ id: prevAccounts.length + 1, ...linkedAccountData },
		]);
		setModalOpen(false);
	};

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	let content;
	switch (activeSection) {
		case "projects":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Projects
						</Typography>
						<List>
							{projects.map((project) => (
								<ListItem key={project.id}>
									<ListItemText
										primary={project.name}
										secondary={project.description}
									/>
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={() => setModalOpen(true)}
							sx={{ mt: 2 }}
						>
							Create New Project
						</Button>
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
						<List>
							{mockLeaderboard.map((entry) => (
								<ListItem key={entry.id}>
									<ListItemText
										primary={entry.user}
										secondary={`Score: ${entry.score}`}
									/>
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={handleOpenModal}
							sx={{ mt: 2 }}
						>
							Add to Leaderboard
						</Button>
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
						<List>
							{mockCourses.map((course) => (
								<ListItem key={course.id}>
									<ListItemText
										primary={course.name}
										secondary={course.description}
									/>
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={handleOpenModal}
							sx={{ mt: 2 }}
						>
							Create New Course
						</Button>
					</CardContent>
				</Card>
			);
			break;
		case "submissions":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Submissions
						</Typography>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>
											<b>GitHub URL</b>
										</TableCell>
										<TableCell align="right">
											<b>Submission Number</b>
										</TableCell>
										<TableCell align="right">
											<b>Timestamp</b>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{mockSubmissions.map((submission) => (
										<TableRow
											key={submission.id}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												{submission.githubRepo}
											</TableCell>
											<TableCell align="right">
												{submission.submissionNumber}
											</TableCell>
											<TableCell align="right">{submission.time}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			);
			break;
		case "manage linked accounts":
			content = (
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h5" component="h2">
							Manage New Linked Accounts
						</Typography>
						<List>
							{mockLinkedAccounts.map((acc) => (
								<ListItem key={acc.id}>
									<ListItemText primary={acc.user} secondary={acc.github} />
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={handleOpenModal}
							sx={{ mt: 2 }}
						>
							Link New Account
						</Button>
					</CardContent>
				</Card>
			);
	}

	return (
		<main>
			{content}
			{activeSection === "projects" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={<ProjectsModalContent onSubmit={handleProjectSubmit} />}
				/>
			)}
			{activeSection === "courses" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={<CourseModalContent onSubmit={handleCourseSubmit} />}
				/>
			)}
			{activeSection === "manage linked accounts" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={
						<LinkedAccountsModalContent onSubmit={handleLinkedAccountsSubmit} />
					}
				/>
			)}
			{activeSection === "leaderboard" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={
						<LeaderboardModalContent onSubmit={handleLeaderboardSubmit} />
					}
				/>
			)}
		</main>
	);
}

export default MainContent;
