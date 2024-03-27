import { Label, Option, Select } from "@admiral-ds/react-ui";
import type { SelectProps } from "@admiral-ds/react-ui";
import { useMemo, useState, useId } from "react";
import type { FC, ReactNode } from "react";
import { LastOption } from "@/features/FormElements";

interface SelectOneProps extends SelectProps {
	label: ReactNode;
	render?: ReactNode[];
}

export const SelectOne: FC<SelectOneProps> = ({
	placeholder = "Placeholder",
	label,
	...props
}) => {
	const [count, setCount] = useState<number>(8);

	const renderOptions = useMemo(() => {
		const array = Array.from({ length: count }, (v, k) => {
			return `${k}0000`;
		}).map((item, index) => (
			<Option value={item} key={`${index}/${count}`}>
				{item}
			</Option>
		));
		array.push(
			<Option
				key={`last/${count}`}
				value={""}
				renderOption={options =>
					<LastOption {...options}
					            onVisible={() => setCount(count + 5)}
					            key={`last`}
					/>}
			/>,
		);

		return array;
	}, [count]);

	const id = useId();

	return (
		<>
			<Label htmlFor={id}>{label}</Label>
			<Select {...props} id={id} placeholder={placeholder} mode="searchSelect">
				{renderOptions}
			</Select>
		</>
	);
};
