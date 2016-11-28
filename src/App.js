import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar';
// import Player from './components/player';
// import VideoList from './components/videoList';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBar store={this.props.state}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {search:state.search,videoList:state.videoList}
}

export default connect(mapStateToProps)(App);
