import styled from "styled-components";

export const Input = styled.input`
	outline: none;
	appearance: none;
	box-sizing: border-box;
	flex: 1 1 auto;
	width: 100%;
	border-radius: 4px;
	border: 1px solid #9BA0AA;
	background: #FFFFFF;
	text-overflow: ellipsis;
	padding: 8px 16px;
	color: #23262D;
	font-family: 'VTB Group UI', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	font-feature-settings: 'tnum' on, 'lnum' on;
	text-rendering: geometricPrecision;
	display: flex;
	overflow: hidden;
	gap: 4px;
	flex-wrap: unset;
	align-items: center;
`;