import { useRoutes, BrowserRouter } from 'react-router-dom'
import { FavoriteProvider } from '../../Context/Context'
import './App.css'
import { Navbar } from '../../template/Navbar'
import { Footer } from '../../template/Footer'
// import { Card } from '../../Components/Card'
import { Home } from '../Home/Home'
import { Favorite } from '../Favorite/Favoritos'
import { NotFound } from '../NotFound/NotFound'
import { Actividad } from '../Actividad/Actividad'
import { Contacto } from '../Contacto/Contacto'


const AppRoutes = () => {
  let routes = useRoutes ([
    { path:'/', element: <Home/>},
    { path:'/home', element: <Home/>},
    { path:'/Favorite', element: <Favorite/>},
    { path:'/Actividad', element: <Actividad/>},
    { path:'/contacto', element: <Contacto/>},
    { path:'/*', element: <NotFound/>}
  ])  
  return routes
}
const App = () => {  

  return (
    <FavoriteProvider>
      <Navbar/>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      <Footer/>
    </FavoriteProvider>


  )
}

export default App
