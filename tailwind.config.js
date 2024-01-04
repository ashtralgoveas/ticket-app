/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#0074B7",
        page: "#003B73",
        card: "#0074B7",
        "card-hover": "#1D93D7",
        "default-text": "#f1f3f5",
        "priority-red": "#FF1A1A",
        "status-red": "#FA5A5A",
        "status-green": "#35D145",
        "status-yellow": "#FDF142",
        "progress-bar": "#FF778A",
        "blue-accent": "#0654C9",
        "blue-accent-hover": "#094BAF",
        "delete-btn": "#D80C0C",
      },
    },
  },
  plugins: [],
};
