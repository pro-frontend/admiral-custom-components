import type { FC } from "react";
import type React from "react";
import { useMemo } from "react";

interface InfiniteScrollListProps {
	selectedValue?: string,
	onSelectedValueChange?: (value: string) => void
}

export const InfiniteScrollList: FC<InfiniteScrollListProps> = ({ onSelectedValueChange }) => {
	const data = useMemo(() => {
		let size = 10;
		const array = Array(size).fill(null);
		return array.map((el, i) => ({ key: `${i}+${i}`, value: i.toString() }));
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
		const target = (e.target as HTMLFormElement);
		const value = target.id;
		console.log(target.id);
		onSelectedValueChange && onSelectedValueChange(value);
	};

	return (
		<ul onClick={handleClick}>
			{data.map(({ key, value }: { key: string, value: string }) => (
				<li key={key} id={value}>{value}</li>
			))}
		</ul>
	);
};
