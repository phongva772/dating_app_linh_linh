import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const API_URL = '/';

export default defineConfig({
  base: API_URL || '/dating_app_linh_linh',
  plugins: [react()]
});
