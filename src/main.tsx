import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import { store } from "./app/store";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { dark } from "./shared/ui/theme";

const container = document.getElementById("root");

if (container) {
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<ThemeProvider theme={dark}>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</React.StrictMode>,
	);
} else {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
	);
}
