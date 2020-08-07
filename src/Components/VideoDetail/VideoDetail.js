import React from "react";
import { Card, CardBody, CardTitle, CardHeader, CardText } from "reactstrap";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div>
        <Card>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoSrc} />
          </div>
          <CardHeader>{this.props.video.snippet.title}</CardHeader>
          <CardBody>
            <CardTitle>{this.props.video.snippet.channelTitle}</CardTitle>
            <CardText>{this.props.video.snippet.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default VideoDetail;
