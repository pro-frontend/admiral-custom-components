import { useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { Modal as BaseModal, ModalTitle, ModalContent, Button } from "@admiral-ds/react-ui";
import { useEventListener } from "@/shared/lib/hooks";
import { Container } from "@/shared/ui";
import styled from "styled-components";

const ButtonContainer = styled(Container)`
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

interface ModalProps {
	title: string;
	children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, children }) => {
	const [opened, setOpened] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			setOpened(false);
		}
	});

	return (
		<>
			<ButtonContainer>
				<Button onClick={() => setOpened(true)}>+</Button>
			</ButtonContainer>
			{opened && (
				<BaseModal
					closeOnEscapeKeyDown
					closeOnOutsideClick
					ref={modalRef}
					onClose={() => {
						setOpened(false);
					}}
					aria-labelledby="modal-title"
				>
					<ModalTitle id="modal-title">{title}</ModalTitle>
					<ModalContent>
						{children}
					</ModalContent>
				</BaseModal>
			)}
		</>
	);
};
