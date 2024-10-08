import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import AddRemoveBtn from './components/AddRemoveBtn'

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <AddRemoveBtn />
    </>
  )
}

export default App