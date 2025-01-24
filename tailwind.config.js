/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-gray": "#B2B2B4",
                "bright-blue": "#007BFF",
            },
            backgroundImage: {
                "hero-img": "url(./assets/images/png/hero-bg-img.png)",
                "utility-img": "url(./assets/images/webp/utility-bg-img.webp)",
                "platform-img": "url(./assets/images/webp/platform-bg-img.webp)",
            },
        },
    },
    plugins: [],
}