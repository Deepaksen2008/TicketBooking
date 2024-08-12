import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import MyOrder from './components/pages/MyOrder/MyOrder'
import Movies from './components/Movies/Movies'
import OrderPlace from './components/pages/OrderPlace/OrderPlace'

const App = () => {


  return (
    <>
        <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<Movies />} />
          <Route path='/Orderplace' element={<OrderPlace />} />
          <Route path='/myorders' element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

