  import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './components/Main/Main'
import Home from './pages/home/Home'
import Search from './components/Search/Search'
import Results from './components/Search/Results'
import Saved from './components/Saved/Saved'
import Footer from './components/Footer/Footer'

import './App.css';

class App extends Component {
  state = {
    width: window.innerWidth,
    scroll: window.pageYOffset
  };

  setWidth = () => {
    this.setState({width: window.innerWidth});
  };

  setScroll = () => {
    this.setState({scroll: window.pageYOffset});
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    this.setWidth();
    this.setScroll();
    window.addEventListener("resize", this.setWidth.bind(this));
    window.addEventListener("scroll", this.setScroll.bind(this));
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.setWidth.bind(this));
    window.removeEventListener("scroll", this.setScroll.bind(this));
  };

  render() {
    return (
      <Router>
        <div>
          <Main/>
          <Search/>
          <Results/>
          <Saved/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
