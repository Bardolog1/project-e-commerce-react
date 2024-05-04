import React from 'react'
import './NavBarItem.css'
import { Link } from 'react-router-dom'

const NavBarItem = (
    {title, url, ...props}
) => {

  return (
  <>
    <li className='nav-item' onClick={props.onClick}>
      <Link className="nav-link" to={url}>
            {props.titleActive=== 'true'? title : <icon className={props.icon? props.icon : ""} />}
      </Link>
    </li>
    
  </>
    
  )
}

export default NavBarItem