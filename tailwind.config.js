module.exports = {
  darkMode: 'class', // Cambia a 'media' si prefieres el modo oscuro basado en la configuración del sistema
  purge: {
    // Configuración para eliminar CSS no utilizado en producción
    enabled: true,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir tus archivos
    ],
  },
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#1DA1F2',
          'secondary': '#14171A',
          'accent': '#657786',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
          'serif': ['Merriweather', 'serif'],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}