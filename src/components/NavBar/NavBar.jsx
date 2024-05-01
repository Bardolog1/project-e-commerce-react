import React, {useState} from 'react';
import './NavBar.css';
import NavBarItem from '../NavBarItem/NavBarItem.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ToggleButton from '../ToogleAmbient/ToogleButton.jsx';

const NavBar = ({items,...props}) => {
    
    

  return (
    <>
    <div className="navbar" >
        <div className="container">
            
                
                <div className="left">
                    <div className="logo">
                        <img src="" alt="logo"/>
                    </div>
                </div>
                
                
                <ul className="right">
                    {props.searchBar? <li> <SearchBar></SearchBar> </li>: null}
                    {items.map((item, index) => (
                        <NavBarItem key={index} title={item.title} url={item.url} icon={item.icon} titleActive={item.titleActive}></NavBarItem>
                    ))
                    }
                    {props.darkMode? <li> <ToggleButton> </ToggleButton></li>: null}
                </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar