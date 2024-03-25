import { useState } from "react";
import { Modal } from "@/features/Modal";
import { Range } from "@/features/FormElements";
import { Separator } from "@/shared/ui";

export const FilterAccountTransactions = () => {
	const [rangeValue, setRangeValue] = useState<[number, number]>([0, 20]);
	
	return <Modal title="Фильтры модуля расчетных операций" buttonTitle="+">
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
