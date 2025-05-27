import { Routes, Route } from 'react-router-dom'
import Flights from './pages/Flights/flights'
import Stays from './pages/Stays/stays'
import CarRental from './pages/CarRental/carRental'
import Home from './pages/Home/home'
import Layout from './pages/Layout/layout'
import Packages from './pages/Packages/packages'

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/flights' element={<Flights/>} />
        <Route path='/stays' element={<Stays />} />
        <Route path='/carRental' element={<CarRental />} />
        <Route path='/packages' element={<Packages />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
