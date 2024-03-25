import { Container } from "@/shared/ui";
import { OldModal } from "@/features/Modal/old/OldModal";
import { ButtonCenterContainer } from "@/shared/ui/Container/ButtonCenterContainer";
import { Separator } from "@/shared/ui/Separator";
import { FilterAccountTransactions } from "@/widgets/FilterAccountTransactions/FilterAccountTransactions";

export const Showcase = () => {

	return (
		<Container>
			<p>Main page!</p>
			<p>Old modal:</p>
			<Separator />
			<OldModal />
			<Separator />
			<ButtonCenterContainer>
				<OldModal />
			</ButtonCenterContainer>
			<Separator />
			<p>New modal:</p>
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
