import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { Container, ListItem } from "@/shared/ui";
import { InfiniteScroll } from "@/features/InfiniteScroll";
import { Modal } from "@/features/Modal";
import { Option, SelectField } from "@admiral-ds/react-ui";
import styled from "styled-components";

const Separator = styled.div`
	height: 20px;
`;

const OPTIONS_SIMPLE = [
	"teeext 1",
	"text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ",
	"text 3",
	"text 4",
	"text 5",
	"texttt 6",
];

export const Showcase = () => {
	const [dataLength, setDataLength] = useState(8);

	const data = useMemo(() => {
		const array = Array(dataLength).fill(null);
		return array.map((el, i) => ({ key: `${i + 1}+${i + 1}`, value: (i + 1).toString() }));
	}, [dataLength]);

	const onLastElement = () => {
		setDataLength((prev) => prev + 10);
	};

	useEffect(() => {
		setDataLength(10);
	}, []);

	const [selected, setSelected] = useState("");
	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelected(e.target.value);
	};

	return (
		<Container>
			<p>Main page!</p>
			<div style={{ display: "none" }}>
				<InfiniteScroll data={data} RenderComponent={ListItem} onLastElement={onLastElement} />
			</div>
			<Modal title="Список полей">
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
			</Modal>
			<p>Admiral UI Examples:</p>
		</Container>
	);
};
