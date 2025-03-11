export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        boxShadow: {
            'custom': '6px 6px 10px rgba(0,0,0,0.2), -6px -6px 10px rgba(255,255,255,0.2)',
            'custom-hover': 'inset 6px 6px 10px rgba(0,0,0,0.3), inset -6px -6px 10px rgba(255,255,255,0.2)',
          },
      },
    },
    plugins: [],
  };
  