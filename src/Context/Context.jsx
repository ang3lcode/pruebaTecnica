import { createContext, useState } from 'react'

export const FavoriteContext= createContext()



export const FavoriteProvider = ({children}) => {
  const [isPDetailOpen, setIsPDetailOpen] = useState(false)
  const openPDetail = () => setIsPDetailOpen(true)
  const closePDetail = () => setIsPDetailOpen(false)

  const [PShow, setPShow] = useState({})

  const [PCart, setPCart] = useState([]) //lista 
  

  // const [items,setItems] = useState(null) // es de un contador 
  return (
    <FavoriteContext.Provider value={{
      isPDetailOpen, 
      openPDetail, closePDetail,
      PShow, setPShow,
      PCart, setPCart
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}