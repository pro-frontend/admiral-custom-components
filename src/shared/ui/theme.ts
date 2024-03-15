import type { DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
	base: {
		black: "#0E0C15",
		white: "#ffefc3"
	},
	grayScale: {
		gray1: "#616D8D",
		gray2: "#313E62",
		gray3: "#222B44",
		gray4: "#121825",
		gray6: "#9CA3AF"
	},
	text: {
		desktop: {
			bodyXlSemiBold: {
				weight: 600,
				size: "22px",
				lineHeight: "29px"
			},
			bodyMMedium: {
				weight: 500,
				size: "16px",
				lineHeight: "22px"
			},
			bodySMedium: {
				weight: 500,
				size: "14px",
				lineHeight: "18px"
			},
			bodyXsRegular: {
				weight: 400,
				size: "12px",
				lineHeight: "16px"
			}
		},
		tablet: {
			bodyXlSemiBold: {
				weight: 600,
				size: "20px",
				lineHeight: "26px"
			},
			bodyMMedium: {
				weight: 500,
				size: "14px",
				lineHeight: "18px"
			},
			bodySMedium: {
				weight: 500,
				size: "12px",
				lineHeight: "16px"
			}
		},
		mobile: {
			bodyXlSemiBold: {
				weight: 600,
				size: "18px",
				lineHeight: "24px"
			},
			bodySMedium: {
				weight: 500,
				size: "12px",
				lineHeight: "16px"
			}
		},
		other: {
			input: {
				sm: {
					weight: 400,
					size: "14px",
					lineHeight: "18px"
				}
			}
		}
	},
	media: {
		mobile: "640px",
		tablet: "1080px",
		desktop: "1920px"
	}
};
