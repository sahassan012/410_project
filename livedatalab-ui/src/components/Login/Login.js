import React, { useState } from "react";
import { Button, TextField, Link, Typography } from "@mui/material";
import { authenticateUser } from "../../utils/mockData";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import InsightsIcon from "@mui/icons-material/Insights";

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
			<div className="login-logo">
				<InsightsIcon style={{ fontSize: 90, color: "#1976d2" }} />
				<span className="login-logo-text">LiveDataLab</span>
			</div>
			<form onSubmit={handleSubmit} className="login-form">
				<TextField
					label="Username"
					variant="outlined"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					error={!!errors.username}
					helperText={errors.username}
					className="login-input"
				/>
				<TextField
					label="Password"
					type="password"
					variant="outlined"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					error={!!errors.password}
					helperText={errors.password}
					className="login-input"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="login-button"
				>
					Login
				</Button>

				<Link href="#" variant="body2" className="forgot-password-link">
					Forgot your password?
				</Link>
				<Link href="#" variant="body2" className="register-link">
					Don't have an account? Sign up
				</Link>
			</form>
		</div>
	);
}

export default Login;
