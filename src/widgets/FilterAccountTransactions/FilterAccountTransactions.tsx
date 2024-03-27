import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { Modal } from "@/features/Modal";
import { Range, SelectOne, SelectOneAsync } from "@/features/FormElements";
import { Separator } from "@/shared/ui";
import { searchPeopleByName } from "@/entities/MockData";
import type { ListDataType } from "@/features/FilteredOptions";
import { FilteredOptions } from "@/features/FilteredOptions";
import { v4 as uuid } from "uuid";

export const FilterAccountTransactions = () => {
	const [clearFilters, setClearFilters] = useState<boolean>(false);
	const [taskType, setTaskType] = useState<string>("Документооборот");
	const [filial, setFilial] = useState<string>("Москва");
	const [documentID, setDocumentID] = useState<string>(uuid());
	const [initiator, setInitiator] = useState<string>("Иванов Иван Олегович");
	const [receiver, setReceiver] = useState<string>("Колосов Иван Олегович");
	const [rangeCountValue, setRangeCountValue] = useState<[number, number]>([1, 21]);
	const [message, setMessage] = useState<string>("");
	const [listData, setListData] = useState<Array<ListDataType>>([]);

	useEffect(() => {
		if (clearFilters) {
			setTaskType("");
			setFilial("");
			setDocumentID("");
			setInitiator("");
			setReceiver("");
			setMessage("");
		}

		setClearFilters(false);
	}, [clearFilters]);

	const handleTaskTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTaskType(e.target.value);
	};

	const handleFilialChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

		setRangeCountValue([0, 20]);

		setListData(prevState => [...prevState, ...chipsData]);

		setClearFilters(true);
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
				<Separator />
				<SelectOneAsync
					label="Тип таска:"
					value={taskType}
					onChange={handleTaskTypeChange}
					placeholder="Тип таска"
					request={searchPeopleByName}
				/>
				<Separator />
				<SelectOne
					label="Филиал:"
					value={message}
					onChange={handleFilialChange}
					placeholder="Филиал"
					// data={[]}
					// count={}
					// onVisible={}
				/>
				<Separator />
				<Range
					label="Сумма:"
					showValues
					step={0.01}
					value={rangeCountValue}
					onChange={(e, range) => setRangeCountValue(range)}
					onRangeValueChange={setRangeCountValue}
				/>
			</Modal>
		</>
	);
};
