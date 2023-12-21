import React from 'react';
 import './styless/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header =()=>{
 return(
    <div className="header">
        <h2>Compiler</h2>
         <div className='search-bar'>
            <input type="text" placeholder='search'></input>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />

        </div> 
        <nav>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href="">About</a></li>
                <li><a href=''>Login</a></li>
            </ul>
        </nav>

        
        </div>

 )
}
export  default Header