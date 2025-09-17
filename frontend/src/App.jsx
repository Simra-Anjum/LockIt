import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'

function App() {
      const [token, setToken] = useState("");


  return  (


    <div>

     
  
      <Navbar token={token} setToken={setToken} />

      <Header/>
      <About/>

       
      <Manager token={token} setToken={setToken} />

      <Footer />
    </div>
  )
}

export default App
