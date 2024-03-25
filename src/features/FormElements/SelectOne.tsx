import { Label, Option, Select, MenuItem } from "@admiral-ds/react-ui";
import type { SelectProps, RenderOptionProps } from "@admiral-ds/react-ui";
import { useMemo, useState, useId, useRef, useEffect } from "react";
import type { FC, ReactNode } from "react";
import styled from "styled-components";

const InvisibleItem = styled(MenuItem)`
	height: 1px;
	padding: 0;
`;

interface LastOptionProps extends RenderOptionProps {
	onVisible?: () => void;
}

const LastOption = ({ containerRef, onVisible, ...props }: LastOptionProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);


	useEffect(() => {
		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && !visible) {
				setVisible(true);
				onVisible?.();
			}

			if (!entries[0].isIntersecting && visible) {
				setVisible(false);
			}
		};

		const observer = new IntersectionObserver(handleIntersection, {
			root: containerRef?.current,
			threshold: [0, 1.0],
		});

		if (containerRef?.current && ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [containerRef, onVisible, visible]);

	return <InvisibleItem ref={ref} {...props} />;
};

interface SelectOneProps extends SelectProps {
	label: ReactNode;
	render?: ReactNode[];
}

export const SelectOne: FC<SelectOneProps> = ({
	placeholder = "Placeholder",
	label,
	render,
	...props
}) => {
	const [count, setCount] = useState<number>(8);

	const renderOptions = useMemo(() => {
		const array = Array.from({ length: count }, (v, k) => {
			return `${k}0000`;
		}).map((item, index) => (
			<Option value={item} key={`${index}/${count}`}>
				{item}
			</Option>
		));
		array.push(
			<Option
				key={`last/${count}`}
				value={""}
				renderOption={options =>
					<LastOption {...options}
					            onVisible={() => setCount(count + 5)}
					            key={`last`}
					/>}
			/>,
		);

		return array;
	}, [count]);

	const rangeId = useId();

	return (
		<>
			<Label htmlFor={rangeId}>{label}</Label>
			<Select {...props} id={rangeId} placeholder={placeholder} mode="searchSelect">
				{renderOptions}
			</Select>
		</>
	);
};
