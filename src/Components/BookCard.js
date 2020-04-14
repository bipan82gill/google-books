import React from 'react';
import './BookCard';


const BookCard = (props) =>{
  return( 
      <div className ="card-container">
          <img src={props.image}alt={props.title} />
            <h3>{props.title}</h3>
            <h3>{props.author}</h3>
            <h3>{props.published}</h3>
         
      </div>
  )
}
export default BookCard;