import React from 'react'
import './App.css'
import NavBare from './components/uitily/NavBare'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import MyFooter from './components/MyFooter'

function App(){
 return(
    <div className='App'>
    <BrowserRouter>
    <NavBare/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
    <MyFooter/>
      </BrowserRouter>
    </div>
 )
}

export default App
