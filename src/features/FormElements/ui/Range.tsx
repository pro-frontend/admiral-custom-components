import { Label, Range as BaseRange } from "@admiral-ds/react-ui";
import type { RangeProps as BaseRangeProps } from "@admiral-ds/react-ui";
import styled from "styled-components";
import type { FC, ReactNode } from "react";
import { memo, useCallback, useId, useMemo, useState } from "react";
import debounce from "lodash.debounce";

const RangeValues = styled.div`
	display: flex;
	justify-content: space-between;
`;

export type RangeNumber = [number, number];

interface RangeProps extends BaseRangeProps {
	/** Show selected range values from UI */
	showValues?: boolean;
	/** set lifted state up */
	onRangeValueChange?: (rangeValue: RangeNumber) => void;
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
	const [rangeValue, setRangeValue] = useState<RangeNumber>([minValue, maxValue]);
	const rangeId = useId();
	const rangeValuesRender = useMemo(() => {
		return <RangeValues><span>{rangeValue[0]}</span> <span>{rangeValue[1]}</span></RangeValues>;
	}, [rangeValue]);

	const onRangeChange = useCallback((e: any, value: RangeNumber) => {
		setRangeValue(value);
		onRangeValueChange && onRangeValueChange(value);
	}, [onRangeValueChange]);

	const debouncedOnRangeChange = debounce(onRangeChange, 10);

	return <>
		<Label htmlFor={rangeId}>{label}</Label>
		{showValues && rangeValuesRender}
		<BaseRange
			{...props}
			id={rangeId}
			value={rangeValue}
			onChange={debouncedOnRangeChange}
		/>
	</>;
});
