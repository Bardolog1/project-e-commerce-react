import React from 'react'
import './NavBarItem.css'
import { Link } from 'react-router-dom'

const NavBarItem = (
    {title, url, ...props}
) => {
  return (
  <>
    <li>
      <Link to={url}>
            {props.titleActive=== 'true'? title : <icon className={props.icon? props.icon : ""} />}
      </Link>
    </li>
    
  </>
    
  )
}

export default NavBarItem