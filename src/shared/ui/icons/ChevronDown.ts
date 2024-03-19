import SvgChevronDownOutline from "@/shared/sources/svgChevronDownOutline.svg?react";
import styled from "styled-components";

export const ChevronDown = styled(SvgChevronDownOutline)<{ $size: string }>`
	width: ${props => props.$size};
`;
