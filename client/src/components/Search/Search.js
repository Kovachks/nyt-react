import React from 'react';

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
                <button className="searchButton">Search</button>
            </div>
        </div>
        )
    }
};

export default Search;