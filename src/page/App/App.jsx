import { useRoutes, BrowserRouter } from 'react-router-dom'
import { listaFavoritosProvider } from '../../Context/Context'
import './App.css'
import { Navbar } from '../../template/Navbar'
import { Footer } from '../../template/Footer'
// import { Card } from '../../Components/Card'
import { Home } from '../Home/Home'
import { Favorite } from '../Favorite/Favorite'
import { NotFound } from '../NotFound/NotFound'


const AppRoutes = () => {
  let routes = useRoutes ([
    { path:'/', element: <Home/>},
    { path:'/Favorite', element: <Favorite/>},
    { path:'/*', element: <NotFound/>}
  ])  
  return routes
}
const App = () => {  

  return (
    <listaFavoritosProvider>
      <Navbar/>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      <Footer/>
    </listaFavoritosProvider>
  )
}

export default App
