import type { FC } from "react";
import { useCallback } from "react";
import { Button, Select, Space } from "antd";
import { InView } from "react-intersection-observer";
import { PlusOutlined } from "@ant-design/icons";

export const SelectWithCustomDropdown: FC<{
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
			// {
			// 	value: "",
			// 	label: (
			// 		<InView as="div" onChange={onLastElementInView}>"default"</InView> as unknown as string),
			// },
		]}
		dropdownRender={(menu) => (
			<>
				{menu}
				{/*<Space style={{ padding: "0 8px 4px" }}>*/}
				{/*<Button type="text" icon={<PlusOutlined />} onClick={addItem}>*/}
				{/*	Add item*/}
				{/*</Button>*/}
				<InView as="div" onChange={onLastElementInView} />,
				{/*</Space>*/}
			</>
		)}
	/>;
};
