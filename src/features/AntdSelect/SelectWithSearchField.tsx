import type { FC } from "react";
import { useCallback } from "react";
import { Select } from "antd";
import { InView } from "react-intersection-observer";


export const SelectWithSearchField: FC<{
	onLastElement?: () => void;
	data: Array<{ value: string; label: string; }>
}> = ({ data = [], onLastElement }) => {
	const filterOption = (input: string, option?: { label: string; value: string }) =>
		(option?.label ?? "").toLowerCase().includes(input.toLowerCase());

	const filterSort = (optionA?: { value: string; label: string; }, optionB?: { value: string; label: string; }) =>
		(optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase());

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch = (value: string) => {
		console.log("search:", value);
	};

	const onLastElementInView = useCallback(() => {
		onLastElement && onLastElement();
	}, [onLastElement]);

	console.log(data);

	return (
		<>
			<p>SelectWithSearchField:</p>
			<Select
				size="large"
				showSearch
				placeholder="Search to Select"
				optionFilterProp="children"
				// filterOption={filterOption}
				// filterSort={filterSort}
				// onChange={onChange}
				// onSearch={onSearch}
				style={{ width: "100%" }}
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
