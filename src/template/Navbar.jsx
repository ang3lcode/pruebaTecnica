


export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">

        <a href="/" className="text-white text-3xl font-semibold">Pokemon</a>
  
        <div className="hidden md:flex space-x-4">
          <a href="/Favorite" className="text-white">Favoritos</a>
          <a href="#contacto" className="text-white">Contacto</a>
        </div>
        <div className="md:hidden flex">
          {/* Botón de menú para dispositivos móviles */}
          <button className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> */}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

