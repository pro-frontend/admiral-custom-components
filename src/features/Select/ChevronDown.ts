import styled from "styled-components";
import { ChevronDown as _ChevronDown } from "@/shared/ui/icons/ChevronDown";

export const ChevronDown = styled(_ChevronDown)<{ $turnUp?: boolean }>`
	position: absolute;
	right: 16px;
	top: 8px;
	z-index: 1;
	cursor: pointer;
	transition: transform 0.3s ease;
	transform: ${props => (props.$turnUp ? "rotate(180deg)" : "rotate(0deg)")};
	user-select: none;
`;
