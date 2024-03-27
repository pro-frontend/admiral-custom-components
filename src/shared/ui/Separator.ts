import styled from "styled-components";

export enum SeparatorMode {
	S = "5px",
	M = "10px",
	L = "15px",
	XL = "20px"
}

interface SeparatorProps {
	$mode?: SeparatorMode;
}

export const Separator = styled.div<SeparatorProps>`
	height: ${({ $mode }) => $mode ?? SeparatorMode.M};
`;
