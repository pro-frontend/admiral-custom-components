import { useCallback, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import {
	Modal as BaseModal,
	ModalTitle,
	ModalContent,
	Button,
	ModalButtonPanel,
} from "@admiral-ds/react-ui";

interface ModalProps {
	title: string;
	buttonTitle: ReactNode;
	children: ReactNode;
	onOk?: () => void;
	okButtonTitle?: string;
	onCancel?: () => void;
	cancelButtonTitle?: string;
}

export const Modal: FC<ModalProps> = ({
	title,
	buttonTitle,
	children,
	onOk,
	okButtonTitle,
	onCancel,
	cancelButtonTitle,
}) => {
	const [opened, setOpened] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleButtonClick = () => setOpened(true);

	const onOkClick = useCallback(() => {
		onOk && onOk();
		setOpened(false);
	}, [onOk]);

	const onCancelClick = useCallback(() => {
		onCancel && onCancel();
		setOpened(false);
	}, [onCancel]);

	return (
		<>
			<Button onClick={handleButtonClick}>{buttonTitle}</Button>
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
					<ModalButtonPanel>
						{
							okButtonTitle &&
							<Button appearance="primary" dimension="m" onClick={onOkClick}>
								{okButtonTitle}
							</Button>
						}
						{
							cancelButtonTitle &&
							<Button appearance="secondary" dimension="m" onClick={onCancelClick}>
								{cancelButtonTitle}
							</Button>
						}
					</ModalButtonPanel>
				</BaseModal>
			)}
		</>
	);
};
