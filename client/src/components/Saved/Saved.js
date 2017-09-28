import React from 'react';
import { List, ListItem } from "../List";
import DeleteBtn from '../DeleteBtn'
import API from '../../utils/API'

class Saved extends React.Component {

    state = {
        articles: []
    }

    deleteBook = id => {
      API.deleteArticle(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };

    render() {
    return (  
        <div className="container savedContainer">
            <div className="container searchHeader"><h4>Saved</h4></div>
            {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => this.deleteArticle(book._id)} />
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