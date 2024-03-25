import { Option, SelectField } from "@admiral-ds/react-ui";
import { Modal } from "@/features/Modal/Modal";
import { type ChangeEvent, useState } from "react";
import { Separator } from "@/shared/ui/Separator";

export const OldModal = () => {
	const [selected, setSelected] = useState("");

	const OPTIONS_SIMPLE = [
		"teeext 1",
		"text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ",
		"text 3",
		"text 4",
		"text 5",
		"texttt 6",
	];

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelected(e.target.value);
	};

	return <Modal title="Фильтры модуля">
		<SelectField
			label="Тип таска"
			className="Search"
			value={selected}
			onChange={handleSelectChange}
			placeholder="Тип таска"
		>
			{
				OPTIONS_SIMPLE.map((option, ind) => (
					<Option key={option} value={option} disabled={ind === 4}>
						{option}
					</Option>
				))
			}
		</SelectField>
		<Separator />
		Филиал
		<Separator />
		<SelectField
			label="ID документа"
			className="Search"
			value={selected}
			onChange={handleSelectChange}
			placeholder="ID документа"
		>
			{
				OPTIONS_SIMPLE.map((option, ind) => (
					<Option key={option} value={option} disabled={ind === 4}>
						{option}
					</Option>
				))
			}
		</SelectField>
		<Separator />
		Участник отправитель
		<Separator />
		Участник получатель
		<Separator />
		<SelectField
			label="Сумма"
			className="Search"
			value={selected}
			onChange={handleSelectChange}
			placeholder="Сумма"
		>
			{
				OPTIONS_SIMPLE.map((option, ind) => (
					<Option key={option} value={option} disabled={ind === 4}>
						{option}
					</Option>
				))
			}
		</SelectField>
		<Separator />
		<SelectField
			label="Дата/время"
			className="Search"
			value={selected}
			onChange={handleSelectChange}
			placeholder="Дата/время"
		>
			{
				OPTIONS_SIMPLE.map((option, ind) => (
					<Option key={option} value={option} disabled={ind === 4}>
						{option}
					</Option>
				))
			}
		</SelectField>
		<Separator />
		<SelectField
			label="Сообщение"
			className="Search"
			value={selected}
			onChange={handleSelectChange}
			placeholder="Сообщение"
		>
			{
				OPTIONS_SIMPLE.map((option, ind) => (
					<Option key={option} value={option} disabled={ind === 4}>
						{option}
					</Option>
				))
			}
		</SelectField>
	</Modal>;
};
