import { SelectWithSearchField } from "@/features/AntdSelect/SelectWithSearchField";
import { SelectModeTags } from "@/features/AntdSelect/SelectModeTags";
import { useCallback, useMemo, useState } from "react";
import { InView } from "react-intersection-observer";

export const AntdSelectSandbox = () => {
	const [dataForSelectWithSearchFieldLength, setDataForSelectWithSearchFieldLength] = useState(8);
	const [dataForSelectModeTagsLength, setDataForSelectModeTagsLength] = useState(8);

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

	const onLastElementSelectWithSearchField = () => {
		console.log(111);
		if (dataForSelectWithSearchFieldLength < 100) {
			setDataForSelectWithSearchFieldLength((prev => {
				return Math.min(prev + 10, 100);
			}));
		}
	};

	const onLastElementSelectModeTags = () => {
		console.log(222);
		if (dataForSelectWithSearchFieldLength < 100) {
			setDataForSelectModeTagsLength((prev => {
				return Math.min(prev + 10, 100);
			}));
		}
	};

	return <>
		<SelectWithSearchField onLastElement={onLastElementSelectWithSearchField} data={dataForSelectWithSearchField} />
		<SelectModeTags onLastElement={onLastElementSelectModeTags} data={dataForSelectModeTags} />
	</>;
};
