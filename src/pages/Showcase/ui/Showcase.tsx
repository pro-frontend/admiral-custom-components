import { LoadOnScrollTemplate } from "@/features/LoadOnScrollTemplate";
import { Container } from "@/shared/ui";
import SvgChevronDownOutline from "@/shared/sources/svgChevronDownOutline.svg?react";

export const Showcase = () => {
	return (
		<Container>
			<p>Main page!</p>
			<LoadOnScrollTemplate />
			<SvgChevronDownOutline />
		</Container>
	);
};
