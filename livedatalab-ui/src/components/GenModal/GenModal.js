import React from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

function GenModal({ open, handleClose, content }) {
	const handleSubmit = () => {
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>{content}</Box>
		</Modal>
	);
}

export default GenModal;
