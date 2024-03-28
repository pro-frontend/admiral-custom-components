import { useEffect, useRef } from "react";
import type { Voidable } from "@/shared/types";

export const useComponentDidUpdate = (callback: Voidable, condition: Array<unknown>) => {
	const mounted = useRef(false);
	useEffect(() => {
		if (mounted.current) {
			callback();
		} else {
			mounted.current = true;
		}
	}, condition);
};
