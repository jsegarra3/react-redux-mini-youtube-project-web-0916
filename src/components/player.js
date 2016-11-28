import React from 'react';

const src = "";

class Player extends React.Component{
  render(){
    return (
      <div className="video-item">
        <iframe
          id="ytplayer" type="text/html" width="640" height="360"
          src={src}
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

export default Player;
