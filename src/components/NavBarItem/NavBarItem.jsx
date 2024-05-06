import React, { useEffect, useState } from 'react'
import './NavBarItem.css'
import { Link } from 'react-router-dom'

const NavBarItem = (
    {title, url, navScroll, ...props}
) => {


  const animationClick = () => {
   console.log(props.key)
     document.querySelectorAll('.nav-item').forEach(element => {
       if(props.key === element.id){
         element.classList.add('animation')
       }
     })
  }

  return (
  <>
    <li id={props.key} className='nav-item' onClick={animationClick} >
      <Link className={`nav-link ${navScroll ? ' navScroll' : ''}`} to={url}>
            {props.titleActive=== 'true'? title : <icon className={props.icon? props.icon : ""} />}
      </Link>
    </li>
    
  </>
    
  )
}

export default NavBarItem