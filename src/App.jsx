import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
  return (
    <>
     {location.pathname === "/" ? "" : <Navbar />}
      <Outlet />
      <Footer />

      {/* react toastify component */}
      <ToastContainer 
      position="bottom-right"
      autoClose={2000}
      />
    </>
  )
}

export default App
