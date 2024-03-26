import { Container } from "@/shared/ui";
import { ButtonCenterContainer } from "@/shared/ui/Container/ButtonCenterContainer";
import { Separator } from "@/shared/ui/Separator";
import { FilterAccountTransactions } from "@/widgets/FilterAccountTransactions/FilterAccountTransactions";

export const Showcase = () => {

	return (
		<Container>
			<p>Main page!</p>
			<Separator />
			<FilterAccountTransactions />
			<Separator />
			<ButtonCenterContainer>
				<FilterAccountTransactions />
			</ButtonCenterContainer>
			<p>Admiral UI Examples:</p>
			<Separator />
		</Container>
	);
};
