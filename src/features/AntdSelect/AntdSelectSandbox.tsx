import { SelectWithSearchField } from "@/features/AntdSelect/SelectWithSearchField";
import { SelectModeTags } from "@/features/AntdSelect/SelectModeTags";
import { useMemo, useState } from "react";
import { SelectWithCustomDropdown } from "@/features/AntdSelect/SelectWithCustomDropdown";

export const AntdSelectSandbox = () => {
	const [dataForSelectWithSearchFieldLength, setDataForSelectWithSearchFieldLength] = useState(3);
	const [dataForSelectModeTagsLength, setDataForSelectModeTagsLength] = useState(3);
	const [dataForSelectWithCustomDropdownLength, setDataForSelectWithCustomDropdownLength] = useState(3);

	const dataForSelectWithSearchField = useMemo(() => {
		return Array(dataForSelectWithSearchFieldLength)
			.fill(null)
			.map((el, i) => ({ value: (i + 1).toString(), label: (<p>{(i + 1).toString()}</p> as unknown as string) }));
	}, [dataForSelectWithSearchFieldLength]);
	const dataForSelectModeTags = useMemo(() => {
		return Array(dataForSelectModeTagsLength)
			.fill(null)
			.map((el, i) => ({ value: (i + 1).toString(), label: (<p>{(i + 1).toString()}</p> as unknown as string) }));
	}, [dataForSelectModeTagsLength]);
	const dataForSelectWithCustomDropdown = useMemo(() => {
		return Array(dataForSelectWithCustomDropdownLength)
			.fill(null)
			.map((el, i) => ({ value: (i + 1).toString(), label: (<p>{(i + 1).toString()}</p> as unknown as string) }));
	}, [dataForSelectWithCustomDropdownLength]);

	const onLastElementSelectWithSearchField = () => {
		if (dataForSelectWithSearchFieldLength < 100) {
			setDataForSelectWithSearchFieldLength((prev => {
				return Math.min(prev + 10, 100);
			}));
		}
	};
	const onLastElementSelectModeTags = () => {
		if (dataForSelectWithSearchFieldLength < 100) {
			setDataForSelectModeTagsLength((prev => {
				return Math.min(prev + 10, 100);
			}));
		}
	};
	const onLastElementSelectWithCustomDropdown = () => {
		console.log("onLastElementSelectWithCustomDropdown");
		if (dataForSelectWithCustomDropdownLength < 100) {
			console.log("onLastElementSelectWithCustomDropdown if 100");
			setDataForSelectWithCustomDropdownLength((prev => {
				return Math.min(prev + 10, 100);
			}));
		}
	};

	return <>
		{/* This component breaks with prop "data" */}
		{/*<SelectWithSearchField onLastElement={onLastElementSelectWithSearchField} data={dataForSelectWithSearchField} />*/}
		<SelectModeTags onLastElement={onLastElementSelectModeTags} data={dataForSelectModeTags} />
		<SelectWithCustomDropdown
			onLastElement={onLastElementSelectWithCustomDropdown}
			data={dataForSelectWithCustomDropdown} />
	</>;
};
