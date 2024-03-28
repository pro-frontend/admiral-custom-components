import { Chips } from "@admiral-ds/react-ui";
import type { ChipsProps } from "@admiral-ds/react-ui";
import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Voidable } from "@/shared/types";

export enum FilteredOptionsType {
	taskType = "Тип таска",
	filial = "Филиал",
	documentID = "ID документа",
	initiator = "Участник отправитель",
	receiver = "Участник получатель",
	totalCountValue = "Сумма",
	message = "Сообщение",
}

export type FilteredChipsDataType = {
	id: string,
	type: FilteredOptionsType;
	label: string;
};

interface FilteredOptionsProps extends ChipsProps {
	listData: Array<FilteredChipsDataType>;
	onFilteredChipsClose: (item: FilteredChipsDataType) => void;
}

const StyledChips = styled(Chips)`
	max-width: 100%;
`;

export const FilteredOptions: FC<FilteredOptionsProps> = ({ listData, onFilteredChipsClose }) => {
	const dataListRender = useMemo(() => {
		return listData.map((item: FilteredChipsDataType) => (
			<StyledChips
				key={item.id}
				onClose={() => onFilteredChipsClose(item)}
			>
				{item.type}: {item.label}
			</StyledChips>
		));
	}, [listData]);

	return (
		<>
			{dataListRender}
		</>
	);
};



