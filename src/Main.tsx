import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "@/app/App";
import { store } from "@/app/store";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { FontsVTBGroup, DropdownProvider, LIGHT_THEME } from "@admiral-ds/react-ui";
import { dark } from "./shared/ui/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById("root");

const queryClient = new QueryClient();

if (container) {
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			{/*
				TODO:
				Admiral UI has recommendation about usage "LIGHT_THEME" from "@admiral-ds/react-ui" package.
				* Resolve it (compare, merge).
				* How to use own theming with custom field properties?
				* How to use styled.d.ts with custom type of theme.ts file (shared/UI)?
			*/}
			<ThemeProvider theme={LIGHT_THEME}>
				<Provider store={store}>
					<DropdownProvider>
						<FontsVTBGroup />
						<QueryClientProvider client={queryClient}>
							<App />
						</QueryClientProvider>
					</DropdownProvider>
				</Provider>
			</ThemeProvider>
		</React.StrictMode>,
	);
} else {
	throw new Error(
		"Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
	);
}
