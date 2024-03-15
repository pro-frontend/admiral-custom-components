import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		base: {
			black: string;
			white: string;
		};
		grayScale: {
			gray1: string;
			gray2: string;
			gray3: string;
			gray4: string;
			gray6: string;
		};
		text: {
			desktop: {
				bodyXlSemiBold: {
					weight: number;
					size: string;
					lineHeight: string;
				};
				bodyMMedium: {
					weight: number;
					size: string;
					lineHeight: string;
				};
				bodySMedium: {
					weight: number;
					size: string;
					lineHeight: string;
				};
				bodyXsRegular: {
					weight: number;
					size: string;
					lineHeight: string;
				};
			};
			tablet: {
				bodyXlSemiBold: {
					weight: number;
					size: string;
					lineHeight: string;
				};
				bodyMMedium: {
					weight: number;
					size: string;
					lineHeight: string;
				};
				bodySMedium: {
					weight: number;
					size: string;
					lineHeight: string;
				};
			};
			mobile: {
				bodyXlSemiBold: {
					weight: number;
					size: string;
					lineHeight: string;
				};
				bodySMedium: {
					weight: number;
					size: string;
					lineHeight: string;
				};
			};
			other: {
				input: {
					sm: {
						weight: number;
						size: string;
						lineHeight: string;
					};
				};
			};
		};
		media: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
	}
}
