import type { FC, ReactElement } from "react";
import { cloneElement } from "react";
import { Input } from "@/shared/ui/Input";
import { useRef, useState } from "react";
import { useOutsideClick } from "@/shared/lib/hooks/useOutsideClick";

interface RenderSelectOptionsProps {
	selectedValue: string;
	onSelectedValueChange: (value: string) => void;
}

interface SelectProps {
	renderSelectOptions: ReactElement<RenderSelectOptionsProps>;
}

export const Select: FC<SelectProps> = ({ renderSelectOptions }) => {
	const [isSelectOptionsVisible, setIsSelectOptionsVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState("");

	const containerRef = useRef<HTMLDivElement>(null);

	const onInputClick = () => {
		setIsSelectOptionsVisible(true);
	};

	const onSelectOptionsClose = () => setIsSelectOptionsVisible(false);

	useOutsideClick(containerRef, onSelectOptionsClose);

	const handleSelectedValueChange = (value: string) => {
		setSelectedValue(value);
		setIsSelectOptionsVisible(false);
	};

	return (
		<div ref={containerRef}>
			<Input onClick={onInputClick} value={selectedValue} />
			{isSelectOptionsVisible && cloneElement(renderSelectOptions, {
				selectedValue,
				onSelectedValueChange: handleSelectedValueChange,
			})}
		</div>
	);
};
