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
            },
            colors: {
                'feed-bg': '#00000008',

            },
            backgroundColor: {
                'emoji-bg': '#F2F2F2', // emoji background color
            },
            width: {
                'feed': '568px',
                'profile-image': '37px',
            },
            height: {
                'profile-image': '37px',
            },
            minWidth: {
                'feed': '568px'
            },
            minHeight: {
                'feed': '150px'
            },
            boxShadow: {
                'feed-content': '0px 4px 9px 0px rgba(0, 0, 0, 0.05)',
            }

        }
    },
    plugins: [],
}