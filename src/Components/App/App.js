import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";
import "./App.css";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  componentDidMount() {
    this.onSearchSubmit("Larry Wheels");
  }

  async onSearchSubmit(term) {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: "AIzaSyB7Gqso75VVOXJYHRK8MGQqyx5sRVPg5dM",
        },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(response);
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Container className="themed-container" fluid={true}>
          <Row>
            <Col xs="8">
              <VideoDetail video={this.state.selectedVideo} />
            </Col>
            <Col xs="4">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
