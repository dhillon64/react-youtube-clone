import React from "react";
import Video from "../Video/Video";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="VideoList">
        {this.props.videos.map((video) => {
          return (
            <Video
              key={video.id}
              video={video}
              onVideoSelect={this.props.onVideoSelect}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
