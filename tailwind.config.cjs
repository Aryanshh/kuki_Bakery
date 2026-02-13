/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFB6C1', // Baby Pink
                secondary: '#FFF0F5', // Lavender Blush (Very light pink)
                accent: '#880E4F', // Deep Pink/Burgundy (Text)
                'primary-dark': '#FF69B4', // Hot Pink
                'accent-light': '#C2185B', // Medium Dark Pink
            },
            fontFamily: {
                heading: ['"Grandstander"', 'cursive'],
                body: ['"Poppins"', 'sans-serif'],
            },
            backgroundImage: {
                'pattern-dots': "radial-gradient(#5D4037 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
