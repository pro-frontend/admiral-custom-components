import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { Modal } from "@/features/Modal";
import { Range, SelectOne } from "@/features/FormElements";
import { Separator } from "@/shared/ui";
import { SelectOneAsync } from "@/features/FormElements/ui/SelectOneAsync";
import { searchPeopleByName } from "@/entities/MockData";

export const FilterAccountTransactions = () => {
	const [rangeValue, setRangeValue] = useState<[number, number]>([0, 20]);
	const [taskTypeValue, setTaskTypeValue] = useState<string>("");

	const handleTaskTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTaskTypeValue(e.target.value);
	};

	return <Modal title="Фильтры модуля расчетных операций" buttonTitle="+">
		<Separator />
		<SelectOneAsync
			label="Тип таска:"
			request={searchPeopleByName}
		/>
		<Separator />
		<SelectOne
			label="Филиал:"
			value={taskTypeValue}
			onChange={handleTaskTypeChange}
			// data={[]}
			// count={}
			// onVisible={}
		/>
		<Separator />
		<Range
			label="Сумма:"
			showValues
			step={0.1}
			value={rangeValue}
			onChange={(e, range) => setRangeValue(range)}
			onRangeValueChange={setRangeValue}
		/>
	</Modal>;
};
