import { XMarkIcon } from '@heroicons/react/24/solid'

export const ListCard = props => {
  const {id, title, imageUrl, handleDelete } = props

  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-xl font-semibold'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <XMarkIcon 
        onClick={() => handleDelete(id)}
        className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
      </div>
    </div>
  )
}
