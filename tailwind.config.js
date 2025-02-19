/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: '#FAFAFA',           // Soft White background
                gray: '#D3D3D3',            // Light Gray for borders and sections
                'green-dark': '#2E8B57',    // Sea Green for user messages
                blue: '#87CEEB',            // Sky Blue for system messages and links
                'green-light': '#50C878',   // Emerald Green for actionable buttons
                red: '#FF6F61',             // Coral Red for warnings and errors
                'dark-gray': '#4B4B4B',     // Dark Gray for main text
            },
            borderRadius: {
                'md': '0.375rem',           // Rounded corners for modern look
            },
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'], // Clean, readable fonts
            },
        },
    },
    variants: {},
    plugins: [],
};
