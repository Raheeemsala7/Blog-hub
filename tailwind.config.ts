/** @type {import('tailwindcss').Config} */
const withOpacity = (hex : string) => ({ opacityValue }: {opacityValue : string | number}) => {
    if (opacityValue === undefined) return hex
    // تحويل الـ hex إلى قيم RGB يدوياً (0F172A -> 15 23 42)
    return `rgba(15, 23, 42, ${opacityValue})`
}

export default {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: withOpacity('#0F172A'),
                'dark-secondary': withOpacity('#1E293B'),
                primary: '#2563EB',
                accent: '#14B8A6',
                purple: '#7C3AED',
                background: '#F9FAFB',
            },
        },
    },
    plugins: [],
}
