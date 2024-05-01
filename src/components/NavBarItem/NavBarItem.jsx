import React from 'react'
import './NavBarItem.css'

const NavBarItem = (
    {title, url, ...props}
) => {
  return (
  <>
    <li>
        <a href={url}>
            {props.titleActive=== 'true'? title : <icon className={props.icon? props.icon : ""} />}
        </a>
    </li>
  </>
    
  )
}

export default NavBarItem