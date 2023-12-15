import React from "react";
import {
	Modal,
	Box,
	Typography,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";

const DetailModal = ({ open, onClose, item, type }) => {
	const modalStyle = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		minWidth: 400,
	};

	const renderLeaderboard = (leaderboard) => {
		return (
			<TableContainer component={Paper} sx={{ mt: 2 }}>
				<Table aria-label="leaderboard scores">
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell align="right">Username</TableCell>
							<TableCell align="right">Submission</TableCell>
							<TableCell align="right">Score</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{leaderboard.leaderboardScores.map((score, index) => (
							<TableRow key={index}>
								<TableCell component="th" scope="row">
									{score.rank}
								</TableCell>
								<TableCell align="right">{score.username}</TableCell>
								<TableCell align="right">{score.submission}</TableCell>
								<TableCell align="right">{score.score}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	};

	if (!item) return null;
	let content = "<div></div>";
	if (type === "projects") {
		content = (
			<Box sx={modalStyle}>
				<Typography variant="h6" component="h2">
					{item.name}
				</Typography>
				<Typography sx={{ mt: 2 }}>Description: {item.description}</Typography>
				<Typography sx={{ mt: 2 }}>Course: {item.course}</Typography>
				<Box display="flex" justifyContent="space-between" mt={2}>
					<Button variant="outlined" color="secondary" onClick={onClose}>
						Close
					</Button>
				</Box>
			</Box>
		);
	} else if (type === "leaderboard") {
		content = (
			<Box sx={modalStyle} style={{ width: 700 }}>
				<Typography variant="h6" component="h2">
					{item.description}
				</Typography>
				{/* <Typography sx={{ mt: 2 }}>Max Score:{item.maxScore}</Typography> */}
				{renderLeaderboard(item)}
				<Box display="flex" justifyContent="space-between" mt={2}>
					<Button variant="outlined" color="secondary" onClick={onClose}>
						Close
					</Button>
				</Box>
			</Box>
		);
	} else if (type === "courses") {
		content = (
			<Box sx={modalStyle}>
				<Typography variant="h6" component="h2">
					{item.name}
				</Typography>
				<Typography sx={{ mt: 2 }}>{item.description}</Typography>
				<Box display="flex" justifyContent="space-between" mt={2}>
					<Button variant="outlined" color="secondary" onClick={onClose}>
						Close
					</Button>
				</Box>
			</Box>
		);
	} else if (type === "manage linked accounts") {
		content = (
			<Box sx={modalStyle}>
				<Typography variant="h6" component="h2">
					{item.userName}
				</Typography>
				<Typography sx={{ mt: 2 }}>Domain: {item.domain}</Typography>
				<Typography sx={{ mt: 2 }}>API Key: {item.apiKey}</Typography>
				<Box display="flex" justifyContent="space-between" mt={2}>
					<Button variant="outlined" color="secondary" onClick={onClose}>
						Close
					</Button>
				</Box>
			</Box>
		);
	} else if (type === "submissions") {
		content = (
			<Box sx={modalStyle}>
				<Typography variant="h6" component="h2">
					{item.name}
				</Typography>
				<Typography sx={{ mt: 2 }}>{item.description}</Typography>
				<Box display="flex" justifyContent="space-between" mt={2}>
					<Button variant="outlined" color="secondary" onClick={onClose}>
						Close
					</Button>
				</Box>
			</Box>
		);
	}
	return (
		<Modal open={open} onClose={onClose}>
			{content}
		</Modal>
	);
};

export default DetailModal;
