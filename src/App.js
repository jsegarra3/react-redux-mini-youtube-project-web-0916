import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
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
    )
  }

}

function mapStateToProps(state) {
  return {search:state.search,videoList:state.videoList}
}

export default connect(mapStateToProps)(App);
