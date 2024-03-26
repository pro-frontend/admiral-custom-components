import { useState } from "react";
import type { ChangeEvent } from "react";
import { Modal } from "@/features/Modal";
import { Range, SelectOne } from "@/features/FormElements";
import { Separator } from "@/shared/ui";
import { SelectOneAsync } from "@/features/FormElements/ui/SelectOneAsync";
import { searchPeopleByName } from "@/entities/MockData";

export const FilterAccountTransactions = () => {
	const [taskTypeValue, setTaskTypeValue] = useState<string>("");
	const [filialValue, setFilialValue] = useState<string>("");
	const [rangeCountValue, setRangeCountValue] = useState<[number, number]>([0, 20]);

	const handleTaskTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTaskTypeValue(e.target.value);
	};

	const handleFilialChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setFilialValue(e.target.value);
	};

	return <Modal title="Фильтры модуля расчетных операций" buttonTitle="+">
		<Separator />
		<SelectOneAsync
			label="Тип таска:"
			value={taskTypeValue}
			onChange={handleTaskTypeChange}
			placeholder="Тип таска"
			request={searchPeopleByName}
		/>
		<Separator />
		<SelectOne
			label="Филиал:"
			value={filialValue}
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
			step={0.1}
			value={rangeCountValue}
			onChange={(e, range) => setRangeCountValue(range)}
			onRangeValueChange={setRangeCountValue}
		/>
	</Modal>;
};
