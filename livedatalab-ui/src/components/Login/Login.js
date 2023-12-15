import React, { useState } from "react";
import { Button, TextField, Link, Typography } from "@mui/material";
import {
	authenticateUser,
	addUser,
	setCurrentUser,
} from "../../utils/mockData";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import InsightsIcon from "@mui/icons-material/Insights";

function Login(props) {
	const [errors, setErrors] = useState({});
	const [mode, setMode] = useState("login");
	const [credentials, setCredentials] = useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
	const [loginError, setLoginError] = useState("");
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const validateForm = () => {
		let tempErrors = {};
		tempErrors.username = credentials.username ? "" : "Username is required.";
		tempErrors.password = credentials.password ? "" : "Password is required.";
		setLoginError("");
		return tempErrors;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let formErrors = validateForm();
		setErrors(formErrors);

		if (mode === "login") {
			if (!Object.values(formErrors).some((error) => error)) {
				if (authenticateUser(credentials.username, credentials.password)) {
					setCurrentUser(credentials.username);
					navigate("/home");
				} else {
					setLoginError("Invalid username or password.");
				}
			}
		} else if (mode === "forgotPassword") {
		} else if (mode === "signUp") {
			addUser(credentials.username, credentials.password);
			setCurrentUser(credentials.username);
			navigate("/home");
		}
	};

	const switchMode = (mode) => {
		setMode(mode);
		setLoginError("");
		setCredentials({
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div className="login-container">
			<div className="login-logo">
				<InsightsIcon style={{ fontSize: 90, color: "#1976d2" }} />
				<span className="login-logo-text">LiveDataLab</span>
			</div>
			<form onSubmit={handleSubmit} className="login-form">
				{mode === "forgotPassword" && (
					<TextField
						label="Email/Username"
						variant="outlined"
						name="email"
						value={credentials.email}
						onChange={handleInputChange}
						required
						className="login-input"
						sx={{ mb: 2 }}
					/>
				)}
				{mode === "signUp" && (
					<TextField
						label="Email"
						variant="outlined"
						name="email"
						value={credentials.email}
						onChange={handleInputChange}
						required
						className="login-input"
					/>
				)}
				{mode !== "forgotPassword" && (
					<TextField
						label={mode === "login" ? "Username" : "Username"}
						variant="outlined"
						name="username"
						value={credentials.username}
						onChange={handleInputChange}
						required
						className="login-input"
					/>
				)}
				{mode !== "forgotPassword" && (
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						name="password"
						value={credentials.password}
						onChange={handleInputChange}
						required
						className="login-input"
					/>
				)}
				{mode === "signUp" && (
					<TextField
						label="Confirm Password"
						type="password"
						variant="outlined"
						name="confirmPassword"
						value={credentials.confirmPassword}
						onChange={handleInputChange}
						required
						className="login-input"
					/>
				)}
				{loginError && <Typography color="error">{loginError}</Typography>}
				<div className="login-actions">
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className="login-button"
					>
						{mode === "login" && "Login"}
						{mode === "forgotPassword" && "Send Reset Link"}
						{mode === "signUp" && "Sign Up"}
					</Button>
					{mode !== "login" && (
						<Button
							variant="text"
							onClick={() => switchMode("login")}
							className="back-to-login-button"
						>
							Back to Login
						</Button>
					)}
				</div>
				<div className="login-links">
					{mode === "login" && (
						<Typography
							variant="body2"
							className="forgot-password-link"
							onClick={() => switchMode("forgotPassword")}
							style={{ cursor: "pointer", color: "#1976d2" }}
						>
							Forgot your password?
						</Typography>
					)}
					{mode === "login" && (
						<Typography
							variant="body2"
							className="register-link"
							onClick={() => switchMode("signUp")}
							style={{ cursor: "pointer", color: "#1976d2" }}
						>
							Don't have an account? Sign up
						</Typography>
					)}
				</div>
			</form>
		</div>
	);
}

export default Login;
