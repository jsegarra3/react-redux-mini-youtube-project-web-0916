import React from 'react';
import {connect} from 'react-redux';
import fetchVideos from '../actions';

class SearchBar extends React.Component{
  render(){
    return (
      <div class='search-bar'>
        <form onSubmit={this.handleOnSubmit()}>
          <input />
          <button>Search</button>
        </form>
      </div>
    )
  }

  handleOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch(this.props.store,fetchVideos());
  }
}


function mapStateToProps(state) {
  return {search: state.search}
}

export default connect(mapStateToProps)(SearchBar);
