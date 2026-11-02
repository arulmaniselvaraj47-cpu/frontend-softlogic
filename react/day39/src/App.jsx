import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './Components/Student.jsx';
import LoginStatus from './Components/login.jsx';
import Result from './Components/Result.jsx';
import Product from './Components/product.jsx'
import AgeCheck from './Components/AgeC.jsx'

function App() {
  

  return (
    <>
      <Student/>
      <LoginStatus />
      <Result />
      <Product />
      <AgeCheck />
    </>
  )
}

export default App