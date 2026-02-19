import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/sample-ui-repo-two/',
    plugins: [react(), tailwindcss()],
});