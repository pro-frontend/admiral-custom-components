import { createRoot } from "react-dom/client";
import App from "@/app/App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { FontsVTBGroup, DropdownProvider, LIGHT_THEME } from "@admiral-ds/react-ui";

const container = document.getElementById("root");

if (container) {
	const root = createRoot(container);

	root.render(
		<ThemeProvider theme={LIGHT_THEME}>
			<DropdownProvider>
				<FontsVTBGroup />
				<App />
			</DropdownProvider>
		</ThemeProvider>,
	);
} else {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
	);
}
