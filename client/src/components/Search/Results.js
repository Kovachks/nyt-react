import React from 'react';
import { List, ListItem } from "../List";
import DeleteBtn from '../DeleteBtn'

class Results extends React.Component {
    
    state = {
        books: []
    }


    render() {
    return(
        <div className="container resultContainer">
            <div className="container searchHeader"><h4>Results</h4></div>
            {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
        </div>
        )
    }
};

export default Results;