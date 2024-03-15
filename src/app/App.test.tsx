import { screen, render } from "@testing-library/react";
import App from "./App";

test("App should have correct initial render", () => {
	render(<App />);

	// The app should be rendered correctly
	expect(screen.getByText("Text")).toBeInTheDocument();
});
