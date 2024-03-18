import { LoadOnScrollTemplate } from "@/features/LoadOnScrollTemplate";
import { Container } from "@/shared/ui";
import SvgChevronDownOutline from "@/shared/sources/svgChevronDownOutline.svg?react";
import { Select } from "@/features/Select/Select";
import { InfiniteScrollList } from "@/features/Select/InfiniteScrollList";

export const Showcase = () => {
	return (
		<Container>
			<p>Main page!</p>
			<Select renderSelectOptions={<InfiniteScrollList />} />
			<p>Examples:</p>
			<LoadOnScrollTemplate />
			<SvgChevronDownOutline />
		</Container>
	);
};
