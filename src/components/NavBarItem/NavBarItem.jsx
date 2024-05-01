import React from 'react'
import './NavBarItem.css'

const NavBarItem = (
    {title, url, ...props}
) => {
  return (
  <>
    <li>
        <a href={url}>
            {props.icon ? <icon className={props.icon} /> : title}
        </a>
    </li>
  </>
    
  )
}

export default NavBarItem