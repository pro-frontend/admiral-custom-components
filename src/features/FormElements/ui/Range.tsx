import { Label, Range as BaseRange } from "@admiral-ds/react-ui";
import type { RangeProps as BaseRangeProps } from "@admiral-ds/react-ui";
import styled from "styled-components";
import type { FC, ReactNode } from "react";
import { memo, useCallback, useId, useMemo, useState } from "react";

const RangeValues = styled.div`
	display: flex;
	justify-content: space-between;
`;

interface RangeProps extends BaseRangeProps {
	/** Show selected range values from UI */
	showValues?: boolean;
	/** set lifted state up */
	onRangeValueChange?: (rangeValue: [number, number]) => void;
	/** label for range */
	label: ReactNode;
}

export const Range: FC<RangeProps> = memo(({
	showValues = false,
	onRangeValueChange,
	minValue = 0,
	maxValue = 20,
	label,
	...props
}) => {
	const [rangeValue, setRangeValue] = useState<[number, number]>([minValue, maxValue]);
	const rangeId = useId();
	const rangeValuesRender = useMemo(() => {
		return <RangeValues><span>{rangeValue[0]}</span> <span>{rangeValue[1]}</span></RangeValues>;
	}, [rangeValue]);

	const onRangeChange = useCallback((e: any, value: [number, number]) => {
		setRangeValue(value);
		onRangeValueChange && onRangeValueChange(value);
	}, [onRangeValueChange]);

	return <>
		<Label htmlFor={rangeId}>{label}</Label>
		{showValues && rangeValuesRender}
		<BaseRange
			{...props}
			id={rangeId}
			value={rangeValue}
			onChange={onRangeChange}
		/>
	</>;
});
