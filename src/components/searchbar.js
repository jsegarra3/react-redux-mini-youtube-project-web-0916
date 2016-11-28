import React from 'react';
import { fetchVideos }  from '../actions';
import { setSearchTerm } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends React.Component {
  render(){

    return(
      <div className="search-bar">
        <form>
          <input type='text' onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleButtonClick.bind(this)}>Search</button>
        </form>
      </div>
    )
  }

  handleInputChange(event){
    this.props.setSearchTerm(event.target.value)
  }

  handleButtonClick(event){
    event.preventDefault();
    this.props.fetchVideos(this.props.searchTerm);
  }

}

function mapStateToProps(state){
  return { searchTerm: state.searchTerm };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setSearchTerm: setSearchTerm, fetchVideos: fetchVideos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
