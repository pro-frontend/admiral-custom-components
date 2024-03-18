import type { ChangeEvent, FC, ReactElement } from "react";
import { cloneElement, useRef, useState } from "react";
import { Input } from "@/shared/ui/Input";
import { useOutsideClick } from "@/shared/lib/hooks/useOutsideClick";
import { SelectContainer } from "@/features/Select/SelectContainer";
import { ChevronDown } from "@/features/Select/ChevronDown";

interface RenderSelectOptionsProps {
	selectedValue?: string;
	onSelectedValueChange?: (value: string) => void;
}

interface SelectProps {
	renderSelectOptions: ReactElement<RenderSelectOptionsProps>;
}

export const Select: FC<SelectProps> = ({ renderSelectOptions }) => {
	const [isSelectOptionsVisible, setIsSelectOptionsVisible] = useState(false);
	const [selectedValue, setSelectedValue] = useState("");

	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLDivElement>(null);

	const onInputClick = () => {
		inputRef?.current?.focus();
		setIsSelectOptionsVisible(true);
	};

	const onSelectOptionsClose = () => setIsSelectOptionsVisible(false);

	useOutsideClick(containerRef, onSelectOptionsClose);

	const handleSelectedValueChange = (value: string) => {
		setSelectedValue(value);
		setIsSelectOptionsVisible(false);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(e.target.value);
	};

	return (
		<SelectContainer ref={containerRef}>
			<Input ref={inputRef} onClick={onInputClick} value={selectedValue} onChange={onInputChange} />
			<ChevronDown $turnUp={isSelectOptionsVisible} $size={"24px"} onClick={onInputClick} />
			{isSelectOptionsVisible && cloneElement(renderSelectOptions, {
				selectedValue,
				onSelectedValueChange: handleSelectedValueChange,
			})}
		</SelectContainer>
	);
};
