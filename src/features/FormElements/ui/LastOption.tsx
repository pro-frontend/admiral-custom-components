import type { RenderOptionProps } from "@admiral-ds/react-ui";
import { useEffect, useRef, useState } from "react";
import { InvisibleItem } from "@/features/FormElements/ui/InvisibleItem";

interface LastOptionProps extends RenderOptionProps {
	onVisible?: () => void;
}

export const LastOption = ({ containerRef, onVisible, ...props }: LastOptionProps) => {
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
