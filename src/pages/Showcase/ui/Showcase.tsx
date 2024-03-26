import { Container } from "@/shared/ui";
import { Separator } from "@/shared/ui/Separator";
import { FilterAccountTransactions } from "@/widgets/FilterAccountTransactions/FilterAccountTransactions";
import styled from "styled-components";

const FiltersContainer = styled.section`
	height: 32px;
	display: flex;
`;

export const Showcase = () => {

	return (
		<Container>
			<p>Main page!</p>
			<Separator />
			<FiltersContainer>
				<FilterAccountTransactions />
			</FiltersContainer>
		</Container>
	);
};
