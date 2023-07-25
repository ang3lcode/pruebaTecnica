import { createContext } from 'react'

export const FavoriteContext= createContext()

export const FavoriteProvider = ({children}) => {

  // const [items,setItems] = useState(null) // es de un contador 
  return (
    <FavoriteContext.Provider>
      {children}
    </FavoriteContext.Provider>
  )
}