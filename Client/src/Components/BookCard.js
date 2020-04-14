import React from 'react';
import './BookCard';


const BookCard = (props) =>{
  return( 
      <div className ="card-container">
          <img src={props.image}alt={props.title} />
            <p>{props.title}</p>
            <h5>Author:{props.author}</h5>
            <p>Publish Data:{props.published === '0000'? "Not Available" : props.published.substring(0,4)}</p>
         
      </div>
  )
}
export default BookCard;