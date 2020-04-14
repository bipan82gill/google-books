import React from 'react';

import './SearchBox.css';

const SearchBox = (props) =>{

  return(

      <div className="container">
          <div className ="search_box">
              <form onSubmit ={props.searchBooks} action="">
                <input onChange ={props.handleSearch}type ="text"></input>
                <button type ="submit">Search</button> &nbsp;&nbsp;

                <select defaultValue="Sort" onChange={props.handleSort}>

                      <option disabled value="Sort">Sort</option>
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>

                </select>
              </form>
          </div>
      </div>
  )
}
export default SearchBox;