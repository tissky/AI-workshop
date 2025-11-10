import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 Configuration
 * Apple-inspired minimal theme with 60-20-20 layout guidance
 * 
 * Theme tokens are defined in app/globals.css using @theme directive
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
};

export default config;
