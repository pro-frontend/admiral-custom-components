import { Container } from "@/shared/ui";
import { Separator } from "@/shared/ui/Separator";
import { FilterAccountTransactions } from "@/widgets/FilterAccountTransactions/FilterAccountTransactions";
import { WidgetContainer } from "@/shared/ui/Container";

export const Showcase = () => {

	return (
		<Container>
			<p>Main page!</p>
			<Separator />
			<WidgetContainer>
				<FilterAccountTransactions />
			</WidgetContainer>
		</Container>
	);
};
