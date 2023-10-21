import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const remToPx = (max = 500, step = 4) =>
  Object.fromEntries(
    Array(max + 1)
      .fill(0)
      .map((_, index) => [`${index}`, `${index * step}px`]),
  );

const tailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  plugins: [daisyui],
  theme: {
    spacing: {
      ...remToPx(),
    },
    extend: {
      minHeight: {
        ...remToPx(),
      },
      maxHeight: {
        ...remToPx(),
      },
      minWidth: {
        ...remToPx(),
      },
      maxWidth: {
        ...remToPx(),
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
};

export default tailwindConfig;
