import React from "react";
import { Button,Form, FormControl, Row } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <center>
      <h1 style={{ overflow: "hidden" }}>I GROW BY HELPING PEOPLE IN NEED.</h1>

      <Row className="justify-content-center searchBar">
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Row>

    </center>
  );
};

export default SearchBar;
