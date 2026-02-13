/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFC0CB', // Pink
                secondary: '#FFFDD0', // Cream
                accent: '#5D4037', // Chocolate
                'primary-dark': '#FF91A4', // Darker Pink for hover
                'accent-light': '#8D6E63', // Lighter Chocolate
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
