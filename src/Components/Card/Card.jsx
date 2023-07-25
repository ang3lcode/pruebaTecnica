import { useContext } from "react";
import { FavoriteContext } from "../../Context/Context";
import { PlusIcon } from '@heroicons/react/24/solid'

export const Card = (data) => {
    const context = useContext(FavoriteContext)
  
    const showP = (PDetail) => {
    context.openPDetail()
    context.setPShow(PDetail)
    context.closeSideMenu()
  }
  const addPToCart = (event, PData) => {
    event.stopPropagation()
    context.setPCart([...context.PCart, PData])
    context.openSideMenu()
    
    
  }
  
  return (
    <div className=" max-w-sm h-96 bg-white rounded-lg overflow-hidden shadow-md m-5  cursor-pointer"
    onClick={() => showP(data.data)}>
      <figure className="relative mb-2 w-full h-3/5">
        <span className="absolute bottom-0 left-5 bg-slate-600 rounded-lg text-black text-sm px-3"> {data.data.category.name} </span>
        <img className="h-56 w-full object-cover" src={data.data.images[0]} alt="pokemon" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-slate-500 w-6 h-6 rounded-s-full"
        >
          <PlusIcon 
          onClick={(event) => addPToCart(event, data.data) }
          className='h-6 w-6 text-black'></PlusIcon>
        </div>
      </figure>

      <div className="px-4">
        <h3 className="text-base font-normal text-gray-900">Name: {data.data.title}</h3>
        <p className="text-gray-500 text-sm font-light">ID: {data.data.category.id}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-1">
        {/* Pequeñas cards alternativas */}
        <div className="bg-blue-200 rounded-lg p-2">
        price: {data.data.price}
        </div>
        <div className="bg-green-200 rounded-lg p-2">
        description: {data.data.category.name}
        </div>
       
      </div>
    </div>
  );
};


