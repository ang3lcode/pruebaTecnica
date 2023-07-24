

export const Card = () => {
  return (
    <div className=" max-w-sm bg-white rounded-lg overflow-hidden shadow-md m-5  cursor-pointer">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-slate-600 rounded-lg text-black text-sm px-3"> tipo </span>
        <img className="h-48 w-full object-cover" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" alt="pokemon" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-slate-500 w-6 h-6 rounded-s-full">
          +
        </div>
      </figure>

      <div className="px-4 py-2 ">
        <h3 className="text-lg font-semibold text-gray-900">Name: Eevee</h3>
        <p className="text-gray-500 text-sm font-light">ID: 23</p>
        <p className="text-gray-500 text-sm font-light">Habilidades: ser el mejor</p>
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


