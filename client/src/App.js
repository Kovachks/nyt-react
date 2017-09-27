import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './components/Main/Main'
import Home from './pages/home/Home'

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
        </div>
      </Router>
    );
  }
}

export default App;
