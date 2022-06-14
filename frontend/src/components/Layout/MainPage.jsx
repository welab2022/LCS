import React from 'react'
import Menu from '../../freatures/dashboard/Menu'
import Navbar from '../../freatures/dashboard/Navbar'
import "./mainpage.css"
const MainPage = ({children}) => {
  return (
    <div className='mainpage'>
      <Menu></Menu>
      <div id='main' className='main'>
        <Navbar/>
        {children}
      </div>
      
    </div>
  )
}
export default MainPage