import { Chips } from "@admiral-ds/react-ui";
import type { ChipsProps } from "@admiral-ds/react-ui";
import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

// TODO: add field "type"
export type ListDataType = {
	id: string,
	label: string
};

interface FilteredOptionsProps extends ChipsProps {
	listData: Array<ListDataType>;
}

const StyledChips = styled(Chips)`
	max-width: 100%;
`;

export const FilteredOptions: FC<FilteredOptionsProps> = ({ listData }) => {
	const [dataList, setDataList] = useState(listData);

	useEffect(() => {
		setDataList(listData);
	}, [listData]);

	const dataListRender = useMemo(() => {
		return dataList.map((item) => (
			<StyledChips key={item.id}
			             onClose={() => setDataList((prev) => prev.filter((d) => d.id !== item.id))}>
				{item.label}
			</StyledChips>
		));
	}, [dataList]);

	return (
		<>
			{dataListRender}
		</>
	);
};



