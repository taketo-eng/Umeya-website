/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screen: {
            xs: "350px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            fontFamily: {
                noto: ["var(--font-noto)", ...fontFamily.sans],
                rock: ["rocknroll-one", ...fontFamily.sans],
            },
            colors: {
                main: "#c21244",
                text: "#333",
            },
            width: {
                "1px": "1px",
                25: "100px",
                base: "calc(100% - 32px)",
            },
            height: {
                "1px": "1px",
                0.5: "2px",
            },
        },
    },
    plugins: [
        plugin(({ addUtilities, matchUtilities, theme }) => {
            matchUtilities(
                {
                    "clip-path": (value) => ({
                        "clip-path": value,
                    }),
                },
                { value: theme("clipPath") }
            )
        }),
    ],
}
