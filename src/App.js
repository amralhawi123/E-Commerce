import React from 'react'
import './App.css'
import NavBare from './components/uitily/NavBare'
import {Route , Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MyFooter from './components/MyFooter'
import ShoppingCartProvider from './context/shoppingCartContext';

function App(){
 return(
  <>
      <ShoppingCartProvider>
    <NavBare/>
        <Routes>
          <Route index element={<HomePage/>}/>
        </Routes>
      </ShoppingCartProvider>
    <MyFooter/>
  </>
 )
}

export default App
