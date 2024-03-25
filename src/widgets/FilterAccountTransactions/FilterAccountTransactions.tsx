import { useState } from "react";
import type { ChangeEvent } from "react";
import { Modal } from "@/features/Modal";
import { Range, SelectOne } from "@/features/FormElements";
import { Separator } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { SelectAsync } from "@/features/FormElements/SelectAsync";

async function searchPeopleByName(name: string) {
	const response = await fetch(
		"https://swapi.tech/api/people/?" +
		new URLSearchParams({
			search: name,
		}),
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}

export const FilterAccountTransactions = () => {
	const [rangeValue, setRangeValue] = useState<[number, number]>([0, 20]);
	const [taskTypeValue, setTaskTypeValue] = useState<string>("");

	const handleTaskTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTaskTypeValue(e.target.value);
	};
	return <Modal title="Фильтры модуля расчетных операций" buttonTitle="+">
		<Separator />
		<SelectAsync />
		<Separator />
		<SelectOne
			label="Тип таска:"
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
