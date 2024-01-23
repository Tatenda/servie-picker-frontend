import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {

        },
    },
    darkMode: "class",
    plugins: [nextui({
        layout: {
            spacingUnit: 4, // in px
            disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
            dividerWeight: "1px", // h-divider the default height applied to the divider component
            fontSize: {
                tiny: "0.75rem", // text-tiny
                small: "0.875rem", // text-small
                medium: "1rem", // text-medium
                large: "1.125rem", // text-large
            },
            lineHeight: {
                tiny: "1rem", // text-tiny
                small: "1.25rem", // text-small
                medium: "1.5rem", // text-medium
                large: "1.75rem", // text-large
            },
            radius: {
                small: "4px", // rounded-small
                medium: "8px", // rounded-medium
                large: "12px", // rounded-large
            },
            borderWidth: {
                small: "1px", // border-small
                medium: "2px", // border-medium (default)
                large: "3px", // border-large
            },
        },
        themes: {
            light: {
                colors: {
                    background: "#fefefe",
                    foreground: "#13232b",
                    secondary: {
                        "100": "#D5E4FC",
                        "200": "#ADC7F9",
                        "300": "#81A4EF",
                        "400": "#5F85DF",
                        "500": "#3059CB",
                        "600": "#2344AE",
                        "700": "#183192",
                        "800": "#0F2275",
                        "900": "#091661",
                        DEFAULT: "#3059CB",
                        foreground: "#ffffff"
                    },
                    primary: {
                        "100": "#CFFACD",
                        "200": "#9EF5A3",
                        "300": "#69E17C",
                        "400": "#42C462",
                        "500": "#129E43",
                        "600": "#0D8744",
                        "700": "#097142",
                        "800": "#055B3D",
                        "900": "#034B39",
                        DEFAULT: "#129E43",
                        foreground: "#ffffff"
                    },
                    success: {
                        "100": "#CFFACD",
                        "200": "#9EF5A3",
                        "300": "#69E17C",
                        "400": "#42C462",
                        "500": "#129E43",
                        "600": "#0D8744",
                        "700": "#097142",
                        "800": "#055B3D",
                        "900": "#034B39",
                        DEFAULT: "#129E43",
                        foreground: "#ffffff"
                    },
                    info: {
                        "100": "#CAF4FD",
                        "200": "#96E4FB",
                        "300": "#61CAF3",
                        "400": "#39Ace7",
                        "500": "#0082D8",
                        "600": "#0064B9",
                        "700": "#004B9B",
                        "800": "#00357D",
                        "900": "#002567",
                        DEFAULT: "#0082D8",
                        foreground: "#ffffff"
                    },
                    warning: {
                        "100": "#FDF4CE",
                        "200": "#FBE69D",
                        "300": "#F4D16B",
                        "400": "#EABA46",
                        "500": "#dd9a0f",
                        "600": "#BE7D0A",
                        "700": "#9F6307",
                        "800": "#804B04",
                        "900": "#6A3A02",
                        DEFAULT: "#BE7D0A",
                        foreground: "#ffffff"
                    },
                    danger: {
                        "100": "#FEE5D0",
                        "200": "#FDC6A3",
                        "300": "#FB9E74",
                        "400": "#F87851",
                        "500": "#F43B1A",
                        "600": "#D12113",
                        "700": "#AF0D0D",
                        "800": "#8D0813",
                        "900": "#750416",
                        DEFAULT: "#F43B1A",
                        foreground: "#ffffff"

                    },
                    black: {
                        "100": "#394F5E",
                        "200": "#2E424F",
                        "300": "#232F3C",
                        "400": "#1B262F",
                        "500": "#13232B",
                        "600": "#0F1E26",
                        "700": "#0C1921",
                        "800": "#091417",
                        "900": "#060E10",
                        DEFAULT: "#13232B",
                        foreground: "#fefefe"
                    }
                },
            },
            dark: {
                colors: {
                    foreground: "#fefefe",
                    background: "#13232b",
                    secondary: {
                        "100": "#D5E4FC",
                        "200": "#ADC7F9",
                        "300": "#81A4EF",
                        "400": "#5F85DF",
                        "500": "#3059CB",
                        "600": "#2344AE",
                        "700": "#183192",
                        "800": "#0F2275",
                        "900": "#091661",
                        DEFAULT: "#3059CB",
                        foreground: "#ffffff"
                    },
                    primary: {
                        "100": "#CFFACD",
                        "200": "#9EF5A3",
                        "300": "#69E17C",
                        "400": "#42C462",
                        "500": "#129E43",
                        "600": "#0D8744",
                        "700": "#097142",
                        "800": "#055B3D",
                        "900": "#034B39",
                        DEFAULT: "#129E43",
                        foreground: "#ffffff"
                    },
                    success: {
                        "100": "#CFFACD",
                        "200": "#9EF5A3",
                        "300": "#69E17C",
                        "400": "#42C462",
                        "500": "#129E43",
                        "600": "#0D8744",
                        "700": "#097142",
                        "800": "#055B3D",
                        "900": "#034B39",
                        DEFAULT: "#129E43",
                        foreground: "#ffffff"
                    },
                    info: {
                        "100": "#CAF4FD",
                        "200": "#96E4FB",
                        "300": "#61CAF3",
                        "400": "#39Ace7",
                        "500": "#0082D8",
                        "600": "#0064B9",
                        "700": "#004B9B",
                        "800": "#00357D",
                        "900": "#002567",
                        DEFAULT: "#0082D8",
                        foreground: "#ffffff"
                    },
                    warning: {
                        "100": "#FDF4CE",
                        "200": "#FBE69D",
                        "300": "#F4D16B",
                        "400": "#EABA46",
                        "500": "#dd9a0f",
                        "600": "#BE7D0A",
                        "700": "#9F6307",
                        "800": "#804B04",
                        "900": "#6A3A02",
                        DEFAULT: "#BE7D0A",
                        foreground: "#ffffff"
                    },
                    danger: {
                        "100": "#FEE5D0",
                        "200": "#FDC6A3",
                        "300": "#FB9E74",
                        "400": "#F87851",
                        "500": "#F43B1A",
                        "600": "#D12113",
                        "700": "#AF0D0D",
                        "800": "#8D0813",
                        "900": "#750416",
                        DEFAULT: "#F43B1A",
                        foreground: "#ffffff"

                    }
                },
            },
        }
    })],
}
export default config
