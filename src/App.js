import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchbar'
import Player from './components/player'
import VideoList from './components/videolist'

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Player />
        <VideoList />
      </div>
    );
  }
}

export default App;
