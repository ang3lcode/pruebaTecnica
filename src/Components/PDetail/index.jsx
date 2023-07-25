import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { FavoriteContext } from '../../Context/Context'

const PDetail = () => {
    const context = useContext(FavoriteContext)
    
  return (
    <aside 
        className={`${context.isPDetailOpen ? 'flex' : 'hidden'} p-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Favoritos</h2>
        <div>
          <XMarkIcon 
          className='h-6 w-6 text-black'
          onClick={() => context.closePDetail()}></XMarkIcon>
        </div>
      </div>
      <figure className='px-6' >
        <img 
            className="w-full h-full rounded-lg" src={context.PShow.images} alt={context.PShow.title} />
      </figure>
      <p className='p-6' >
        <span className='font-medium text-2xl mb-2' >{context.PShow.title}</span>
      </p>
    </aside>
  )
}

export default PDetail