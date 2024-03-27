import type { ElementType, FC } from "react";
import { useCallback, useMemo } from "react";
import { List, ListItem } from "@/shared/ui";
import { InView } from "react-intersection-observer";

interface InfiniteScrollProps {
	data: Array<{ key: string, value: string | number }>;
	RenderComponent?: ElementType;
	onLastElement?: () => void;
}

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
	data,
	RenderComponent,
	onLastElement,
}) => {
	const Element = useMemo(
		() => RenderComponent ?? ListItem, [RenderComponent]);

	const renderListItems = useMemo(() => {
		return data.map(({ key, value }, i) => (
			<Element key={key}>{value}</Element>
		));
	}, [data, RenderComponent]);

	const onLastElementInView = useCallback(() => {
		onLastElement && onLastElement();
	}, []);

	return <List>
		{renderListItems}
		<InView as="div" onChange={onLastElementInView} />
	</List>;
};
