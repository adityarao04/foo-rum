/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            fontWeight: {
                'inter-regular': '400',
                'inter-medium': '500',
                'inter-semibold': '600',
                'inter-bold': '700',
                'inter-extrabold': '800',
            }
        }
    },
    plugins: [],
}