import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { FavoriteContext } from '../../Context/Context'
import './styles.css'
import { ListCard } from '../ListCard'

const SideMenu = () => {
  const context = useContext(FavoriteContext)
  
  const handleDelete = (id) => {
    const filtered = context.PCart.filter(pok => pok.id != id)
    context.setPCart(filtered)
  }

  return (
    <aside
      className={`${context.isSideMenuOpen ? 'flex' : 'hidden'} side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Favoritos</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeSideMenu()}></XMarkIcon>
        </div>
      </div>
      <div className='px-7 overflow-y-scroll'>
        {
          context.PCart.map( card => (
            <ListCard 
            key={card.id}
            id={card.id}
            title={card.title} 
            imageUrl={card.images} 
            handleDelete={handleDelete}/>
          ))
        }

      </div>
      
    </aside>
  )
}

export default SideMenu