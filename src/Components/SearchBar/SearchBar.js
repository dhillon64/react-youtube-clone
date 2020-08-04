import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import logo from "./logo.png";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="">
            <img src={logo} alt="logo" width="100" height="25" />
          </NavbarBrand>
          <Form inline className="mx-auto" onSubmit={this.onSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                onChange={(e) => this.setState({ term: e.target.value })}
                style={{ width: 450 }}
                type="search"
                name="search"
                value={this.state.term}
                placeholder="Search"
              />
            </FormGroup>
            <Button color="danger">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;
