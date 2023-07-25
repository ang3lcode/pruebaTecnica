import { useRoutes, BrowserRouter } from 'react-router-dom'
import { FavoriteProvider } from '../../Context/Context'
import './App.css'
import { Navbar } from '../../template/Navbar'
import { Footer } from '../../template/Footer'

import { Home } from '../Home/Home'

import { NotFound } from '../NotFound/NotFound'
import { Actividad } from '../Actividad/Actividad'
import { Contacto } from '../Contacto/Contacto'
import SideMenu from '../../Components/SideMenu'


const AppRoutes = () => {
  let routes = useRoutes ([
    { path:'/', element: <Home/>},
    { path:'/home', element: <Home/>},

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
          <SideMenu/>
        </BrowserRouter>
      <Footer/>
    </FavoriteProvider>


  )
}

export default App
