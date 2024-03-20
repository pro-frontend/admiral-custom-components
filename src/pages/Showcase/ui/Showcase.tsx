import { LoadOnScrollTemplate } from "@/features/LoadOnScrollTemplate";
import { Container, ListItem } from "@/shared/ui";
import { InfiniteScroll } from "@/features/InfiniteScroll";
import { useEffect, useMemo, useState } from "react";
import { AntdSelectSandbox } from "@/features/AntdSelect";

export const Showcase = () => {
	const [dataLength, setDataLength] = useState(8);

	const data = useMemo(() => {
		let size = dataLength;
		const array = Array(size).fill(null);
		return array.map((el, i) => ({ key: `${i + 1}+${i + 1}`, value: (i + 1).toString() }));
	}, [dataLength]);

	const onLastElement = () => {
		setDataLength((prev) => prev + 20);
	};

	useEffect(() => {
		setDataLength(20);
	}, []);

	return (
		<Container>
			<p>Main page!</p>
			<InfiniteScroll data={data} RenderComponent={ListItem} onLastElement={onLastElement} />
			<p>Antd:</p>
			<AntdSelectSandbox />
			<p>Examples:</p>
			<LoadOnScrollTemplate />
		</Container>
	);
};
