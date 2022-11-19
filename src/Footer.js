import React from 'react'
import {FaHeart} from 'react-icons/fa'
import './Content.css'
const Footer = () => {
  
  const date=new Date();
    return (
    <footer>
        <h2>Keep learning And Strive For Progress</h2>
         <p>Copyright &copy;  {date.getFullYear()}</p>
         <p>Made With <FaHeart /></p>
    </footer>
  )
}

export default Footer