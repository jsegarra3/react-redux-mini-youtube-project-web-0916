import React from 'react';
import { connect } from 'react-redux';

class VideoList extends React.Component{
  render(){
    return (
      <div className="list-group-item">
      </div>
    )
  }
}

function mapStateToProps(state){
  return { activeVideo: state.activeVideo, videos: state.videos};
}

export default connect(mapStateToProps)(VideoList);
