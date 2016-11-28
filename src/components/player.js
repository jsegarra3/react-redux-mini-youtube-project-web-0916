import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component{
  render(){
    let url = `https://www.youtube.com/embed/${this.props.activeVideo}?autoplay=1&origin=http://example.com`;
    return (
      <div className="video-item">
        <iframe
          id="ytplayer" type="text/html" width="640" height="360"
          src={url}
          frameBorder="0">
        </iframe>
        <div className='video-detail'>
          <div className='details'>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {activeVideo:state.activeVideo}
}

export default connect(mapStateToProps)(Player);
