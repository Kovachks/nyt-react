import React from 'react';
import { List, ListItem } from "../List";
import DeleteBtn from '../DeleteBtn'
import API from "../../utils/API"

class Search extends React.Component {
     
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      saveArticle = event => {
          API.saveArticle(event)
          .then(res => this.loadSavedArticles())
          .catch(err => console.log(err));
      };

      loadSavedArticles = () => {
          API.getSavedArticles()
          .then(
              res => {
                  this.setState({savedarticles: res.data})
              })
              .catch(err => console.log(err))
      }

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {
          API.searchArticle(
            this.state.topic,
            this.state.startYear,
            this.state.endYear
          )
            .then(res => {this.setState({articles: res.data.response.docs})
        })
            .catch(err => console.log(err));
        }
      };

    render() {
    return (
        <div className="container searchContainer">
            <div className="container searchHeader"><h4>Search</h4></div>
            <div className="">
                <h5>Topic</h5>
                <input className="searchInput" name="topic" value={this.state.topic} onChange={this.handleInputChange}></input>
                <h5>Start Year</h5>
                <input className="searchInput" name="startYear" value={this.state.startYear} onChange={this.handleInputChange}></input>
                <h5>End Year</h5>
                <input className="searchInput" name="endYear" value={this.state.endYear} onChange={this.handleInputChange}></input>
                <br></br>
                <button className="searchButton" onClick={this.handleFormSubmit}>Search</button>
            </div>
            <div className="container resultContainer">
                <div className="container searchHeader"><h4>Results</h4></div>
                {this.state.articles.length ? (
                    <List>
                      {this.state.articles.map(article => (

                          <ListItem key={article.pub_date}>
                            <h3>{article.headline.main}</h3>
                            <a href={article.web_url}>{article.web_url} </a>
                            <h3>{article.pub_date}</h3>
                            <DeleteBtn id="articleInfo" type="submit" onClick={() => this.saveArticle({title: article.headline.main,
                                                                        url: article.web_url,
                                                                        date: article.pub_date})} />
                          </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
            </div>
        </div>
    )    
    }
};

export default Search;