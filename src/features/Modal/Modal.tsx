import { useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { Modal as BaseModal, ModalTitle, ModalContent, Button } from "@admiral-ds/react-ui";

interface ModalProps {
	title: string;
	children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, children }) => {
	const [opened, setOpened] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleButtonClick = () => setOpened(true);

	return (
		<>
			<Button onClick={handleButtonClick} />
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
