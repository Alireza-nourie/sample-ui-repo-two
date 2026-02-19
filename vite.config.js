import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/eudaimotors-logistics-optimization-platf-8ec47b35ba8e94ba/',
    plugins: [react(), tailwindcss()],
});