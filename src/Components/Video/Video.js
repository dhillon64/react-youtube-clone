import React from "react";
import { Media, ListGroup, ListGroupItem } from "reactstrap";
import "./Video.css";

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem
          onClick={() => this.props.onVideoSelect(this.props.video)}
        >
          <Media className="spacing">
            <Media left href="#">
              <Media
                object
                src={this.props.video.snippet.thumbnails.medium.url}
                alt="video thumbnail"
                className="imgsize"
              />
            </Media>
            <Media body className="text-space">
              <Media heading className="title">
                {this.props.video.snippet.title}
              </Media>
              {this.props.video.snippet.channelTitle}
            </Media>
          </Media>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Video;
