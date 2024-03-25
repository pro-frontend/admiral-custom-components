import { Container } from "@/shared/ui";
import { OldModal } from "@/features/Modal/old/OldModal";
import { ButtonCenterContainer } from "@/shared/ui/Container/ButtonCenterContainer";
import { Separator } from "@/shared/ui/Separator";

export const Showcase = () => {
	return (
		<Container>
			<p>Main page!</p>
			<Separator />
			<OldModal />
			<Separator />
			<ButtonCenterContainer>
				<OldModal />
			</ButtonCenterContainer>
			<p>Admiral UI Examples:</p>
		</Container>
	);
};
