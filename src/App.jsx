import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const location = useLocation();
  return (
    <>
     {location.pathname === "/" ? "" : <Navbar />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
