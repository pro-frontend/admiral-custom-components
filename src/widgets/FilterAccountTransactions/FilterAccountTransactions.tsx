import type { ChangeEvent } from "react";
import { useState } from "react";
import { Modal } from "@/features/Modal";
import { Range, SelectOneAsync } from "@/features/FormElements";
import type { ListDataType } from "@/features/FilteredOptions";
import { FilteredOptions } from "@/features/FilteredOptions";
import { v4 as uuid } from "uuid";
import type { RangeNumber } from "@/features/FormElements";
import { Separator, SeparatorMode } from "@/shared/ui";

const defaultTotalCount: RangeNumber = [0, 20];

export const FilterAccountTransactions = () => {
	const [taskType, setTaskType] = useState<string>("Документооборот");
	const [filial, setFilial] = useState<string>("Москва");
	const [documentID, setDocumentID] = useState<string>(uuid());
	const [initiator, setInitiator] = useState<string>("Иванов Иван Олегович");
	const [receiver, setReceiver] = useState<string>("Колосов Иван Олегович");
	const [totalCountValue, setTotalCountValue] = useState<RangeNumber>(defaultTotalCount);
	const [message, setMessage] = useState<string>("");
	const [listData, setListData] = useState<Array<ListDataType>>([]);

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

	const onModalOk = () => {
		const chipsData: ListDataType[] = [];

		if (taskType) chipsData.push({ id: uuid(), label: `Тип таска: ${taskType}` });
		if (filial) chipsData.push({ id: uuid(), label: `Филиал: ${filial}` });
		if (documentID) chipsData.push({ id: uuid(), label: `ID документа: ${documentID}` });
		if (initiator) chipsData.push({ id: uuid(), label: `Участник отправитель: ${initiator}` });
		if (receiver) chipsData.push({ id: uuid(), label: `Участник получатель: ${receiver}` });
		if (message) chipsData.push({ id: uuid(), label: `Сообщение: ${message}` });

		if (!totalCountValue.every((element, index) => element === defaultTotalCount[index])) {
			chipsData.push({ id: uuid(), label: `Сумма: от ${totalCountValue[0]} до ${totalCountValue[1]}` });
		}

		setTotalCountValue(defaultTotalCount);

		setListData(prevState => [...prevState, ...chipsData]);
	};

	return (
		<>
			<FilteredOptions listData={listData} />
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
