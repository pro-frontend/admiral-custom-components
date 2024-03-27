import { Label, Option, Select } from "@admiral-ds/react-ui";
import type { SelectProps } from "@admiral-ds/react-ui";
import { LastOption } from "@/features/FormElements";
import { v4 as uuid } from "uuid";
import debounce from "lodash.debounce";
import type { ChangeEvent, FC, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { SearchPeopleResponse } from "@/entities/MockData/api/searchPeople";
import { fetchData } from "@/shared/lib/api/fetchData";
import { noopFn } from "@/shared/types/types";

interface SelectOneAsyncExperimentProps extends SelectProps {
	label: ReactNode;
	// TODO: describe type
	// FIXME: change type from "any"
	request: (name: string, page?: string, limit?: string) => Promise<SearchPeopleResponse>;
	onVisible?: () => void;
}

export const SelectOneAsyncExperiment: FC<SelectOneAsyncExperimentProps> = ({ label, request, ...props }) => {
	const [selectValue, setSelectValue] = useState(props.value ? String(props.value) : "");
	const [options, setOptions] = useState<Array<{ value: string; text: string }>>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		const params = `search=${filter}&page=${currentPage}&limit=10`;

		fetchData<SearchPeopleResponse>("https://swapi.tech/api/people", params, setIsLoading, noopFn)
			.then(data => {
				if (data) {
					const names = data.results;
					const options = names.map(({ name }) => ({ value: name, text: name }));
					if (currentPage === 1) {
						setOptions(options);
					} else {
						setOptions(prevState => [...prevState, ...options]);
					}
					setTotalPages(data.total_pages);
				}
			});
	}, [selectValue, filter, currentPage]);

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectValue(e.target.value);
		props.onChange?.(e);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const debouncedOnChange = debounce(onChange, 1000);
	const debouncedOnInputChange = debounce(onInputChange, 1000);

	const renderOptions = useMemo(() => {
		const onLastElementVisible = () => {
			if (currentPage < totalPages) {
				setCurrentPage(currentPage + 1);
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

	return (
		<>
			<Label>{label}</Label>
			<Select
				{...props}
				value={selectValue}
				isLoading={isLoading}
				onChange={debouncedOnChange}
				onInputChange={debouncedOnInputChange}
				mode="searchSelect"
			>
				{renderOptions}
			</Select>
		</>
	);
};