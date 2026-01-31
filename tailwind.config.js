/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/renderer/index.html",
        "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Isso define a sua fonte como a "sans" (padrão do Tailwind)
                sans: ['Montserrat", sans-serif', 'sans-serif'],
            },
        },
    },
    plugins: [],
}