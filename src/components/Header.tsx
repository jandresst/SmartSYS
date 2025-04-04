import Button from './ui/Button';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">SmartSYS</h1>
        <nav>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Servicios</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-400 transition-colors">Más</a>
              <ul className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Blog</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">FAQs</a></li>
              </ul>
            </li>
          </ul>
          {/* Botón reutilizable con texto personalizado */}
          <Button
            onClick={() => alert('Iniciar Sesión')}
            className="hidden md:block" // Oculto en pantallas pequeñas
          >
            Ver Màs
          </Button>
        </nav>
      </div>
    </header>
  );
}