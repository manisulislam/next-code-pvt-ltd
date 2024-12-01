import { Outlet } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ScrollProgressBar from "../components/ScrollProgressBar/ScrollProgressBar"


const Layout = () => {
  return (
    <>
    <Header/>
    <ScrollProgressBar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout