import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { BookName } from './src/core/constants';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react({
        babel: {
            plugins: ['babel-plugin-react-compiler'],
        },
    }),],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: () => {
                    return `assets/books/${BookName}/[name]-[hash][extname]`;
                },
                // chunkFileNames: 'assets/js/[name]-[hash].js',
                // entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    },
})
