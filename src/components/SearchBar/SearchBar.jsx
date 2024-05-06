import React from 'react'
import './SearchBar.css'

const SearchBar = ({navScroll, ...props}) => {
  return (
    <>
    <div className={` search-bar ${navScroll ? ' display' : ' fade'}`} {...props}>
        <div className="containerSearch">
            <input className="searchInput" type="text" placeholder="Search..."/>
            <i className="fa-solid fa-search"></i>
        </div>
    </div>
    </>
  )
}

export default SearchBar