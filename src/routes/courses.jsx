import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Courses = () => {
  return (
    <>  
        <Header />
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr"
        }}>
            <div style={{display: "flex", flexDirection:"column", backgroundColor: "#008024", height: "100vh"}}>
                <p>Home</p>
                <p>About</p>
            </div>
            
        </div>
        <Footer />
        <Outlet />
    </>
   
  )
}

export default Courses