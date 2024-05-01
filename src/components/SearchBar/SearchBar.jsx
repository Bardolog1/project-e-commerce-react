import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <>
    <div className="search-bar">
        <div className="containerSearch">
            <input type="text" placeholder="Search..."/>
            <i className="fa-solid fa-search"></i>
        </div>
        
    </div>
    </>
  )
}

export default SearchBar