import { LoadOnScrollTemplate } from "@/features/LoadOnScrollTemplate";
import { Container } from "@/shared/ui";
import { Select } from "@/features/Select/Select";
import { MenuList } from "@/features/Select/MenuList";

export const Showcase = () => {
	return (
		<Container>
			<p>Main page!</p>
			<Select renderSelectOptions={<MenuList />} />
			<p>Examples:</p>
			<LoadOnScrollTemplate />
		</Container>
	);
};
