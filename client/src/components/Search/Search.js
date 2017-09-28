import React from 'react';

const Search = props => (
    <div className="container searchContainer">
        <div className="container searchHeader"><h4>Search</h4></div>
        <div className="">
            <h5>Topic</h5>
            <input className="searchInput"></input>
            <h5>Start Year</h5>
            <input className="searchInput"></input>
            <h5>End Year</h5>
            <input className="searchInput"></input>
            <br></br>
            <button className="searchButton">Search</button>
        </div>
     </div>
);

export default Search;