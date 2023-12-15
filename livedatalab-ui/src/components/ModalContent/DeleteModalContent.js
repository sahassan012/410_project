import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography, Button } from "@mui/material";

function DeleteModalContent({
	open,
	onClose,
	onDelete,
	deleteRequest,
	itemType,
}) {
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

	const handleDelete = () => {
		onDelete(deleteRequest.type, deleteRequest.id);
		onClose();
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="delete-confirmation-modal"
			aria-describedby="delete-confirmation-description"
		>
			<Box sx={style}>
				<Typography id="delete-confirmation-modal" variant="h6" component="h2">
					Confirm Delete
				</Typography>
				<Typography id="delete-confirmation-description" sx={{ mt: 2 }}>
					Are you sure you want to delete this {itemType}?
				</Typography>
				<Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
					<Button sx={{ mr: 1 }} onClick={onClose}>
						Cancel
					</Button>
					<Button variant="contained" color="error" onClick={handleDelete}>
						Delete
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}

export default DeleteModalContent;
