import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
				<App />
		</BrowserRouter>
	</React.StrictMode>
);