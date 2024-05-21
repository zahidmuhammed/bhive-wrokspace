/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-1": "#000000",
                "primary-2": "#FFBB00",
                "btn-primary-main": "#FFCF4B",
                "btn-primary-stroke": "#FFC422",
                "btn-secondary-main": "#F9F9F9",
                "btn-secondary-stroke": "#CEC6C6",
                "text-main": "#263238",
                "text-secondary": "#65624C",
                "gray-1": "#333333",
                "gray-2": "#4F4F4F",
                "gray-3": "#828282",
                "gray-4": "#B7B6B8",
                "gray-5": "#E0E0E0",
            },
            fontSize: {
                h1: "58px",
                h2: "36px",
                h3: "24px",
                h4: "20px",
                h5: "18px",
                h6: "16px",
            },
        },
    },
    plugins: [],
};
