import React from 'react';
import API from '../../utils/API';

class Search extends React.Component {
     
    state = {
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

    handleFormSearch = event => {
        event.preventDefault();
        if (this.state.topic && this.state.startYear && this.state.endYear) {
            API.searchArticle({
              title: this.state.topic,
              author: this.state.startYear,
              synopsis: this.state.endYear
            })
              .then(res => this.loadBooks())
              .catch(err => console.log(err));
        }
    }

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
                <button className="searchButton" disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSearch}>Search</button>
            </div>
        </div>
        )
    }
};

export default Search;