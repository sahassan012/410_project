import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { authenticateUser } from "../../utils/mockData";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const validateForm = () => {
		let tempErrors = {};
		tempErrors.username = username ? "" : "Username is required.";
		tempErrors.password = password ? "" : "Password is required.";
		return tempErrors;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let formErrors = validateForm();
		setErrors(formErrors);
		if (!Object.values(formErrors).some((error) => error)) {
			if (authenticateUser(username, password)) {
				navigate("/home");
			} else {
				//login failure
			}
		}
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit} className="login-form">
				<TextField
					label="Username"
					variant="outlined"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<TextField
					label="Password"
					type="password"
					variant="outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button type="submit" variant="contained" color="primary">
					Login
				</Button>
			</form>
		</div>
	);
}

export default Login;
