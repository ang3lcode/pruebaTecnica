import { createContext, useState } from 'react'

export const FavoriteContext= createContext()



export const FavoriteProvider = ({children}) => {
  const [isPDetailOpen, setIsPDetailOpen] = useState(false)
  const openPDetail = () => setIsPDetailOpen(true)
  const closePDetail = () => setIsPDetailOpen(false)

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const openSideMenu = () => setIsSideMenuOpen(true)
  const closeSideMenu = () => setIsSideMenuOpen(false)

  const [PShow, setPShow] = useState({})

  const [PCart, setPCart] = useState([]) //lista closeSideMenu
  

  // const [items,setItems] = useState(null) // es de un contador 
  return (
    <FavoriteContext.Provider value={{
      isPDetailOpen, 
      openPDetail, closePDetail,
      PShow, setPShow,
      PCart, setPCart,
      isSideMenuOpen,
      openSideMenu, closeSideMenu,
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}