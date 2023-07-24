import { createContext } from 'react'

const listaFavoritos = createContext()

export const listaFavoritosProvider = ({children}) => {
  return (
    <listaFavoritos.Provider>
      {children}
    </listaFavoritos.Provider>
  )
}