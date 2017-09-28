import React from 'react';
import { List, ListItem } from "../List";
import DeleteBtn from '../DeleteBtn'

class Saved extends React.Component {

    state = {
        books: []
    }

    render() {
    return (  
        <div className="container savedContainer">
            <div className="container searchHeader"><h4>Saved</h4></div>
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
                        <DeleteBtn onClick={() => this.saveArticle(book._id)} />
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

export default Saved;