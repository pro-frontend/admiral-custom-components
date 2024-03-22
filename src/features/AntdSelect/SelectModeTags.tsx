import type { FC } from "react";
import { useCallback } from "react";
import { Select } from "antd";
import { InView } from "react-intersection-observer";

export const SelectModeTags: FC<{
	onLastElement?: () => void;
	data: Array<{ value: string; label: string; }>
}> = ({ data, onLastElement }) => {
	const handleChange = (value: string | string[]) => {
		console.log(`Selected: ${value}`);
	};

	const onLastElementInView = useCallback(() => {
		onLastElement && onLastElement();
	}, [onLastElement]);

	return <Select
		mode="tags"
		size="large"
		placeholder="Please select"
		defaultValue={["1", "5"]}
		onChange={handleChange}
		style={{ width: "100%" }}
		options={[
			...data,
			{
				value: "",
				label: (
					<InView as="div" onChange={onLastElementInView}>"default"</InView> as unknown as string),
			},
		]}
	/>;
};
