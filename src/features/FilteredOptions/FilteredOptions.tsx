import { Chips } from "@admiral-ds/react-ui";
import type { ChipsProps } from "@admiral-ds/react-ui";
import type { FC } from "react";
import { useState } from "react";

export type ListDataType = {
	id: string,
	label: string
};

interface FilteredOptionsProps extends ChipsProps {
	listData: Array<ListDataType>;
}

export const FilteredOptions: FC<FilteredOptionsProps> = ({ listData, ...props }) => {
	const [dataList, setDataList] = useState(listData);
	return (
		<>
			{dataList.map((item) => (
				<Chips key={item.id} {...props}
				       onClose={() => setDataList((prev) => prev.filter((d) => d.id !== item.id))}>
					{item.label}
				</Chips>
			))}
		</>
	);
};



