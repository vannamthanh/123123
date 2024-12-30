import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.tsx'],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.2s ease-out'
            }
        }
    },
    important: true,
    plugins: []
} satisfies Config;
