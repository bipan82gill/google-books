import React, { Component } from 'react';
import SearchBox from './SearchBox';
import BookList from './BookList';
import request from 'superagent';

class Books extends Component{
    constructor(props){
        super(props);
        this.state ={
            books:[],
            searchField:''
        }
    }

    searchBooks = (e) => {
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q:this.state.searchField })
        .then((data) => {
            console.log(data);
            this.setState({books:[...data.body.items]})
        })
    }

handleSearch = (e) => {
    this.setState({ searchField: e.target.value});
}
render(){
  return(
      <React.Fragment>
      <SearchBox searchBooks ={this.searchBooks} handleSearch={this.handleSearch}/>
      <BookList books={this.state.books}/>
      </React.Fragment>
  )
 }
}
export default Books;