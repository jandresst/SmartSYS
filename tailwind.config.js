module.exports = {
  darkMode: "class", // Habilita el modo oscuro basado en clases
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Busca clases en estos archivos
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#2A363B", // Tus colores personalizados
        secondary: "#E84A5F",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fuente personalizada
      },
    },
  },
  plugins: [],
};