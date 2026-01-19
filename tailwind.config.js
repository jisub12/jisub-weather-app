/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            // 색상
            colors: {
                // Backgrounds
                My_Black: '#0F1115',
                My_Dark1: '#161A22',
                My_Dark2: '#1D2330',

                // Text
                My_White: '#E6EAF2',
                My_Gray1: '#9AA3B2',
                My_Gray2: '#6F7A8C',

                My_Mint: '#3ED0C2',

                // Status
                My_Red: '#FF5A5A',
                My_Blue: '#3A74D1',
                My_Yellow: '#FFD700',

                // Line/Border
                My_Line: '#2A313F',
            },
            // 화면 크기
            screens: {
                'sm': '320px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
        },
    },
};
