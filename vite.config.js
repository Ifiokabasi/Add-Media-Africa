
import { defineConfig } from 'vite';
import react from '@vitejs/react-swc'; // or @vitejs/plugin-react
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({ 
      hostname: 'https://www.addmediaafrica.com',
      dynamicRoutes: ['/about', '/service', '/contact', '/work'] // Add your subpages here
    }),
  ],
});