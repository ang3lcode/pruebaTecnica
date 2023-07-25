


export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">

        <a href="/" className="text-white text-3xl font-semibold">Pokemon</a>
  
        <div className="hidden md:flex space-x-4">
         
          <a href="/Actividad" className="text-white">Actividad 2</a>
          <a href="/Contacto" className="text-white">Contacto</a>
          <a href="/Error" className="text-white">Error</a>
        </div>
       
      </div>
    </nav>
  );
};

