import type { FC } from "react";
import type React from "react";
import { useMemo } from "react";

interface InfiniteScrollListProps {
	selectedValue: string,
	onSelectedValueChange: (value: string) => void
}

export const InfiniteScrollList: FC<InfiniteScrollListProps> = ({ selectedValue, onSelectedValueChange }) => {
	const data = useMemo(() => {
		let size = 10;
		const array = Array(size).fill(null);
		return array.map((el, i) => ({ key: `${i}+${i}`, value: i.toString() }));
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
		const value = e.target.id;
		console.log(e.target.id);
		onSelectedValueChange(value);
	};

	return (
		<ul onClick={handleClick}>
			{data.map(({ key, value }: { key: string, value: string }) => (
				<li key={key} id={value}>{value}</li>
			))}
		</ul>
	);
};
