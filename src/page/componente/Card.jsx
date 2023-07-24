

export const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md m-5 ">
      <img className="h-48 w-full object-cover" src="ruta_de_la_imagen.jpg" alt="Imagen del Pokémon" />

      <div className="px-4 py-2">
        <h3 className="text-xl font-semibold text-gray-900">Nombre del Pokémon</h3>
        <p className="text-gray-500">ID: Número de identificación del Pokémon</p>
        <p className="text-gray-500">Habilidades: Lista de habilidades del Pokémon</p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-2">
        {/* Pequeñas cards alternativas */}
        <div className="bg-blue-200 rounded-lg p-2">
          Contenido de la card 1
        </div>
        <div className="bg-green-200 rounded-lg p-2">
          Contenido de la card 2
        </div>
        {/* Puedes agregar más pequeñas cards aquí */}
      </div>
    </div>
  );
};


