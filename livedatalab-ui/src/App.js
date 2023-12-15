import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import "./App.css";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Layout />} />
			</Routes>
		</Router>
	);
}

export default App;
