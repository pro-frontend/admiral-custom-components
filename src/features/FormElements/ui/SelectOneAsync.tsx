import { useQuery } from "@tanstack/react-query";
import { Label, Option, Select, useDebounce } from "@admiral-ds/react-ui";
import type { SelectProps } from "@admiral-ds/react-ui";
import type { ChangeEvent, FC, ReactNode } from "react";
import { useEffect, useId, useState } from "react";

interface SelectOneAsyncProps extends SelectProps {
	label: ReactNode;
	request: any;
	onVisible?: () => void;
}

export const SelectOneAsync: FC<SelectOneAsyncProps> = ({ label, request, ...props }) => {
	const [selectValue, setSelectValue] = useState(props.value ? String(props.value) : "");
	const [options, setOptions] = useState<Array<{ value: string; text: string }>>([]);

	const [filter, setFilter] = useState("");

	const debouncedFilter = useDebounce(filter, 500);

	const { data, isLoading } = useQuery({
		queryKey: ["products", debouncedFilter],
		queryFn: () => request(debouncedFilter),
	});

	useEffect(() => {
		if (data) {
			const names = data["results"] as Array<{ name: string }>;
			const options = names.map(({ name }) => ({ value: name, text: name }));
			setOptions(options);
		}
	}, [data]);

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(e.target.value);
		props.onChange?.(e);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const id = useId();

	return (
		<>
			<Label htmlFor={id}>{label}</Label>
			<Select
				{...props}
				value={selectValue}
				isLoading={isLoading}
				onChange={onChange}
				onInputChange={onInputChange}
				mode="searchSelect"
				id={id}
				virtualScroll={{ itemHeight: "auto" }}
			>
				{options.map((option) => (
					<Option key={option.value} value={option.value}>
						{option.text}
					</Option>
				))}
			</Select>
		</>
	);
};
