/* eslint-disable */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                m_black: "#141414",
                border_white: "#2C2C2C",
                f_text: "#B5B5B5",
            },
            fontFamily: {
                barlow: ["Barlow"],
            },
        },
    },
    plugins: [require("tailwindcss-scrollbar")],
};
