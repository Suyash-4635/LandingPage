import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbarr from './Navbarr'

function Home() {
  return (
    <>
    <Navbarr/>
     <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Home