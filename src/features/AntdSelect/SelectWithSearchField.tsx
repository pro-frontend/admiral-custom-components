import type { FC } from "react";
import { useCallback } from "react";
import { Select } from "antd";
import { InView } from "react-intersection-observer";

const onChange = (value: string) => {
	console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
	console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
	(option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export const SelectWithSearchField: FC<{
	onLastElement?: () => void;
	data: Array<{ value: string; label: string; }>
}> = ({ data, onLastElement }) => {

	const onLastElementInView = useCallback(() => {
		onLastElement && onLastElement();
	}, [onLastElement]);

	return (
		<>
			<p>SelectWithSearchField:</p>
			<Select
				size="large"
				showSearch
				placeholder="Select a person"
				optionFilterProp="children"
				onChange={onChange}
				onSearch={onSearch}
				filterOption={filterOption}
				options={[
					...data,
					{
						value: "",
						label: (
							<InView as="div" onChange={onLastElementInView}>"default"</InView> as unknown as string),
					},
				]}
			/>
		</>
	);
};
