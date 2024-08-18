import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        '0.05': '0.05px',  // Custom border width
      },
      borderColor: {
        'opacity-25': 'rgba(255, 255, 255, 0.25)',
        'opacity-50': 'rgba(255, 255, 255, 0.5)',
        'opacity-75': 'rgba(255, 255, 255, 0.75)',
      },
    },
  },
  plugins: [],
};

export default config;
