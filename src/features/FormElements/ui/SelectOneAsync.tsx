import { useQuery } from "@tanstack/react-query";
import { Label, Option, Select, useDebounce } from "@admiral-ds/react-ui";
import type { SelectProps } from "@admiral-ds/react-ui";
import { LastOption } from "@/features/FormElements/ui/LastOption";
import type { ChangeEvent, FC, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

interface SelectOneAsyncProps extends SelectProps {
	label: ReactNode;
	request: any;
	onVisible?: () => void;
}

export const SelectOneAsync: FC<SelectOneAsyncProps> = ({ label, request, ...props }) => {
	const [selectValue, setSelectValue] = useState(props.value ? String(props.value) : "");
	const [options, setOptions] = useState<Array<{ value: string; text: string }>>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [filter, setFilter] = useState("");

	const debouncedFilter = useDebounce(filter, 500);

	const { data, isLoading } = useQuery({
		queryKey: ["products", debouncedFilter],
		queryFn: () => request(debouncedFilter, String(currentPage)),
	});

	useEffect(() => {
		if (data) {
			const names = data["results"] as Array<{ name: string }>;
			const options = names.map(({ name }) => ({ value: name, text: name }));
			if (currentPage === 1) {
				setOptions(options);
			} else {
				setOptions((prevState) => [...prevState, ...options]);
			}
		}
	}, [data]);

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(e.target.value);
		props.onChange?.(e);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const renderOptions = useMemo(() => {
		const onLastElementVisible = () => {
			const totalPages = data["total_pages"];
			if (currentPage < totalPages) {
				setCurrentPage(prevState => {
					return prevState + 1;
				});
			}
		};

		const array = options.map(({ value, text }) => (
			<Option value={value} key={uuid()}>
				{value}
			</Option>
		));

		array.push(
			<Option
				key={uuid()}
				value={""}
				renderOption={options =>
					<LastOption
						{...options}
						onVisible={onLastElementVisible}
						key={uuid()}
					/>}
			/>,
		);

		return array;
	}, [options]);

	console.log(renderOptions.length);

	return (
		<>
			<Label>{label}</Label>
			<Select
				{...props}
				value={selectValue}
				isLoading={isLoading}
				onChange={onChange}
				onInputChange={onInputChange}
				mode="searchSelect"
			>
				{renderOptions}
			</Select>
		</>
	);
};
