import React from 'react'
import HomePageComponents from '../../Components/HomePageComponents'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <HomePageComponents/>
        <Footer/>
    </div>
  )
}

export default Home