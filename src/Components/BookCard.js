import React from 'react';
import './BookCard';


const BookCard = (props) =>{
  return( 
      <div className ="card-container">
          <img src={props.image}alt={props.title} />
            <p>{props.title}</p>
            <h4>Author:{props.author}</h4>
            <p>Publish Date:{props.published === '0000'? "not Available" : props.published.substring(0,4)}</p>
         
      </div>
  )
}
export default BookCard;