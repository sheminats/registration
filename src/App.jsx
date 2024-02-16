import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'



function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
<Route path='/registration' element={<Registration/>} ></Route>
<Route path='/dashboard' element={<Dashboard/>} ></Route>

     
    </Routes>
    </>
  )
}

export default App
