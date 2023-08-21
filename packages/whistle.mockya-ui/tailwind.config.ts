import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  plugins: [daisyui],
};

export default tailwindConfig;
