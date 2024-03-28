import type { ChangeEvent } from "react";
import { useState } from "react";
import { Modal } from "@/features/Modal";
import type { RangeNumber } from "@/features/FormElements";
import { Range, SelectOneAsync } from "@/features/FormElements";
import type { FilteredChipsDataType } from "@/features/FilteredOptions";
import { FilteredOptions } from "@/features/FilteredOptions";
import { v4 as uuid } from "uuid";
import { Separator, SeparatorMode } from "@/shared/ui";
import { FilteredOptionsType } from "@/features/FilteredOptions/FilteredOptions";

const defaultTotalCount: RangeNumber = [0, 5];

export const FilterAccountTransactions = () => {
	const [taskType, setTaskType] = useState<string>("Документооборот");
	const [filial, setFilial] = useState<string>("Москва");
	const [documentID, setDocumentID] = useState<string>(uuid());
	const [initiator, setInitiator] = useState<string>("Иванов Иван Олегович");
	const [receiver, setReceiver] = useState<string>("Колосов Иван Олегович");
	const [totalCountValue, setTotalCountValue] = useState<RangeNumber>(defaultTotalCount);
	const [message, setMessage] = useState<string>("");
	const [listData, setListData] = useState<Array<FilteredChipsDataType>>([]);

	const handleTaskTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTaskType(e.target.value);
	};
	const handleFilialChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilial(e.target.value);
	};
	const handleDocumentIDChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setDocumentID(e.target.value);
	};
	const handleInitiatorChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setInitiator(e.target.value);
	};
	const handleReceiverChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setReceiver(e.target.value);
	};
	const handleRangeCountValueChange = (e: unknown, value: [number, number]) => {
		setTotalCountValue(value);
	};
	const handleMessageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setMessage(e.target.value);
	};

	const onFilteredChipsClose = (item: FilteredChipsDataType) => {
		setListData((prev) => prev.filter((d) => d.id !== item.id));
	};

	const onModalOk = () => {
		const chipsData: FilteredChipsDataType[] = [];

		if (taskType) chipsData.push({
			id: uuid(),
			type: FilteredOptionsType.taskType,
			label: `${taskType}`,
		});
		if (filial) chipsData.push({ id: uuid(), type: FilteredOptionsType.filial, label: `${filial}` });
		if (documentID) chipsData.push({
			id: uuid(),
			type: FilteredOptionsType.documentID,
			label: `${documentID}`,
		});
		if (initiator) chipsData.push({
			id: uuid(),
			type: FilteredOptionsType.initiator,
			label: `${initiator}`,
		});
		if (receiver) chipsData.push({
			id: uuid(),
			type: FilteredOptionsType.receiver,
			label: `${receiver}`,
		});
		if (message) chipsData.push({ id: uuid(), type: FilteredOptionsType.message, label: `${message}` });

		if (!totalCountValue.every((element, index) => element === defaultTotalCount[index])) {
			chipsData.push({
				id: uuid(),
				type: FilteredOptionsType.totalCountValue,
				label: `от ${totalCountValue[0]} до ${totalCountValue[1]}`,
			});
		}

		// setTotalCountValue(defaultTotalCount);

		setListData(prevState => [...prevState, ...chipsData]);
	};

	return (
		<>
			<FilteredOptions onFilteredChipsClose={onFilteredChipsClose} listData={listData} />
			<Modal
				title="Фильтры модуля расчетных операций"
				buttonTitle="+"
				onOk={onModalOk}
				okButtonTitle="Далее"
			>
				<SelectOneAsync
					label="Тип таска:"
					value={taskType}
					onChange={handleTaskTypeChange}
					placeholder="Тип таска"
				/>
				<Separator $mode={SeparatorMode.L} />
				<SelectOneAsync
					label="Филиал:"
					value={filial}
					onChange={handleFilialChange}
					placeholder="Филиал"
				/>
				<Separator $mode={SeparatorMode.L} />
				<SelectOneAsync
					label="ID документа:"
					value={documentID}
					onChange={handleDocumentIDChange}
					placeholder="ID документа"
				/>
				<Separator $mode={SeparatorMode.L} />
				<SelectOneAsync
					label="Участник отправитель:"
					value={initiator}
					onChange={handleInitiatorChange}
					placeholder="Участник отправитель"
				/>
				<Separator $mode={SeparatorMode.L} />
				<SelectOneAsync
					label="Участник получатель:"
					value={receiver}
					onChange={handleReceiverChange}
					placeholder="Участник получатель"
				/>
				<Separator $mode={SeparatorMode.L} />
				<Range
					label="Сумма:"
					showValues
					step={0.01}
					minValue={defaultTotalCount[0]}
					maxValue={defaultTotalCount[1]}
					value={totalCountValue}
					onChange={handleRangeCountValueChange}
					onRangeValueChange={setTotalCountValue}
				/>
				<Separator $mode={SeparatorMode.L} />
				<SelectOneAsync
					label="Сообщение:"
					value={message}
					onChange={handleMessageChange}
					placeholder="Сообщение"
				/>
			</Modal>
		</>
	);
};
