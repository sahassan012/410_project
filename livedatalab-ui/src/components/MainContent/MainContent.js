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
import DetailModal from "../ModalContent/DetailModal";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import "./MainContent.css";
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
import DeleteModalContent from "../ModalContent/DeleteModalContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function MainContent({ activeSection }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [projects, setProjects] = useState(mockProjects);
	const [courses, setCourses] = useState(mockCourses);
	const [linkedAccounts, setLinkedAccounts] = useState(mockLinkedAccounts);
	const [leaderboard, setLeaderboard] = useState(mockLeaderboard);
	const [deleteRequest, setDeleteRequest] = useState({ type: null, id: null });
	const [selectedItem, setSelectedItem] = useState(null);
	const [detailModalOpen, setDetailModalOpen] = useState(false); // Add this for DetailModal

	const handleProjectSubmit = (projectData) => {
		setProjects((prevProjects) => [
			...prevProjects,
			{ id: prevProjects.length + 1, ...projectData },
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

	const handleCourseSubmit = (courseData) => {
		setCourses((prevCourses) => [
			...prevCourses,
			{ id: prevCourses.length + 1, ...courseData },
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

	const handleDeleteRequest = (type, id) => {
		setDeleteRequest({ type, id });
		console.log("Deleteing " + type + " with id " + id);
	};
	const handleConfirmDelete = () => {
		const { type, id } = deleteRequest;

		if (type === "project") {
			setProjects((prevProjects) =>
				prevProjects.filter((project) => project.id !== id)
			);
		} else if (type === "course") {
			setCourses((prevCourses) =>
				prevCourses.filter((course) => course.id !== id)
			);
		} else if (type === "account") {
			setLinkedAccounts((prevAccounts) =>
				prevAccounts.filter((account) => account.id !== id)
			);
		}
		setDeleteRequest({ type: null, id: null });
	};
	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleItemClick = (item) => {
		setSelectedItem(item);
		setDetailModalOpen(true);
	};
	const handleCloseDetailModal = () => {
		setDetailModalOpen(false);
		setSelectedItem(null);
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
								<ListItem
									className="content-list-items"
									key={project.id}
									onClick={() => handleItemClick(project)}
								>
									<ListItemText
										primary={project.name}
										secondary={project.description}
									/>
									<IconButton
										onClick={() => handleDeleteRequest("project", project.id)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={() => setModalOpen(true)}
							sx={{ mt: 2 }}
						>
							Add New Project
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
							{leaderboard.map((entry) => (
								<ListItem
									onClick={() => handleItemClick(entry)}
									className="content-list-items"
									key={entry.id}
								>
									<ListItemText
										primary={entry.description}
										secondary={`Score: ${entry.maxScore}`}
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
							{courses.map((course) => (
								<ListItem
									onClick={() => handleItemClick(course)}
									className="content-list-items"
									key={course.id}
								>
									<ListItemText
										primary={course.name}
										secondary={course.description}
									/>
									<IconButton
										onClick={() => handleDeleteRequest("course", course.id)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={handleOpenModal}
							sx={{ mt: 2 }}
						>
							Add New Course
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
											onClick={() => handleItemClick(submission)}
											className="content-list-items"
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
							{linkedAccounts.map((acc) => (
								<ListItem
									onClick={() => handleItemClick(acc)}
									className="content-list-items"
									key={acc.id}
								>
									<ListItemText primary={acc.userName} secondary={acc.domain} />
									<IconButton
										onClick={() => handleDeleteRequest("account", acc.id)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={handleOpenModal}
							sx={{ mt: 2 }}
						>
							Link a New Account
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
					content={
						<ProjectsModalContent
							onSubmit={handleProjectSubmit}
							onCancel={() => setModalOpen(false)}
						/>
					}
				/>
			)}
			{activeSection === "courses" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={
						<CourseModalContent
							onSubmit={handleCourseSubmit}
							onCancel={() => setModalOpen(false)}
						/>
					}
				/>
			)}
			{activeSection === "manage linked accounts" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={
						<LinkedAccountsModalContent
							onSubmit={handleLinkedAccountsSubmit}
							onCancel={() => setModalOpen(false)}
						/>
					}
				/>
			)}
			{activeSection === "leaderboard" && (
				<GenModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					content={
						<LeaderboardModalContent
							onSubmit={handleLeaderboardSubmit}
							onCancel={() => setModalOpen(false)}
						/>
					}
				/>
			)}
			<DeleteModalContent
				open={deleteRequest.type !== null}
				onClose={() => setDeleteRequest({ type: null, id: null })}
				onDelete={handleConfirmDelete}
				deleteRequest={deleteRequest}
				itemType={
					activeSection === "projects"
						? "project"
						: activeSection === "courses"
						? "course"
						: "account"
				}
			/>
			{selectedItem && (
				<DetailModal
					open={detailModalOpen}
					onClose={handleCloseDetailModal}
					item={selectedItem}
					type={activeSection}
				/>
			)}
		</main>
	);
}

export default MainContent;
