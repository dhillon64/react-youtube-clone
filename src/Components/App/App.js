import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import axios from "axios";

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
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        we have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
