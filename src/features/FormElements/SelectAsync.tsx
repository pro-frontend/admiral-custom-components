import { useQuery } from "@tanstack/react-query";

import { Option, Select, useDebounce } from "@admiral-ds/react-ui";
import type { SelectProps } from "@admiral-ds/react-ui";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";

async function searchPeopleByName(name: string) {
	const response = await fetch(
		"https://swapi.tech/api/people/?" +
		new URLSearchParams({
			search: name,
		}),
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}

export const SelectAsync = (props: SelectProps) => {
	const [selectValue, setSelectValue] = useState(props.value ? String(props.value) : "");
	const [options, setOptions] = useState<Array<{ value: string; text: string }>>([]);

	const [filter, setFilter] = useState("");

	const debouncedFilter = useDebounce(filter, 500);

	const { data, isLoading } = useQuery({
		queryKey: ["products", debouncedFilter],
		queryFn: () => searchPeopleByName(debouncedFilter),
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

	return (
		<Select
			{...props}
			value={selectValue}
			isLoading={isLoading}
			onChange={onChange}
			onInputChange={onInputChange}
			mode="searchSelect"
		>
			{options.map((option) => (
				<Option key={option.value} value={option.value}>
					{option.text}
				</Option>
			))}
		</Select>
	);
};
