import React from 'react';

import './SearchBox.css';
const SearchBox = (props) =>{
  return(
    <div className="container">
    <div className ="search_box">
      <form onSubmit ={props.searchBooks} action="">
        <input onChange ={props.handleSearch}type ="text"></input>
        <button type ="submit">Search</button>
      </form>
    </div>
    </div>
  )
}
export default SearchBox;