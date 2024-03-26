import { Chips } from "@admiral-ds/react-ui";
import type { ChipsProps } from "@admiral-ds/react-ui";
import { FC, useEffect } from "react";
import { useMemo, useState } from "react";

export type ListDataType = {
	id: string,
	label: string
};

interface FilteredOptionsProps extends ChipsProps {
	listData: Array<ListDataType>;
}

export const FilteredOptions: FC<FilteredOptionsProps> = ({ listData }) => {
	const [dataList, setDataList] = useState(listData);

	useEffect(() => {
		setDataList(listData);
	}, [listData]);

	const dataListRender = useMemo(() => {
		return dataList.map((item) => (
			<Chips key={item.id}
			       onClose={() => setDataList((prev) => prev.filter((d) => d.id !== item.id))}>
				{item.label}
			</Chips>
		));
	}, [dataList]);

	return (
		<div>
			{dataListRender}
		</div>
	);
};



