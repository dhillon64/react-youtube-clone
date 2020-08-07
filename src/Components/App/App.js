import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import "./App.css";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
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
    this.setState({ videos: response.data.items });
    console.log(response);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Container className="themed-container" fluid={true}>
          <Row>
            <Col xs="8"></Col>
            <Col xs="4">
              <VideoList videos={this.state.videos} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
