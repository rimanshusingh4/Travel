import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Destinations from './components/Destinations'
import Stories from './components/Stories'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <Destinations />
      <Stories />
    </>
  )
}

export default App