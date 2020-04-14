import React from 'react';

import './SearchBox.css';
const SearchBox = (props) =>{
  return(
    <div className="container">
    <div className ="search_box">
        <input onChange ={props.handleSearch}type ="text"></input>
        <button type ="submit">Search</button>
    </div>
    </div>
  )
}
export default SearchBox;