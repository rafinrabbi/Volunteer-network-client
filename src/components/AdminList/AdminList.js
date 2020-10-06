import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminList = () => {
  const [activties, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://secret-caverns-37131.herokuapp.com/activityList")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <center>
        <h3>Click the button below to Add A New Event</h3>
        <br />
        <Link to="/addEvent">
          <Button>Add A New Event</Button>
        </Link>
      </center>

      <Container
        className="container col-lg-8 justify-content-md-center"
        style={{ display: "flex", marginTop: 40 }}
      >
        <Row>
          <h1>List of All Registered Activities By Users</h1>
          <ol>
            {activties.map((actv) => (
              <li>
                {actv.fullName} || {actv.email} || {actv.date} ||{" "}
                {actv.selectedActivity}
              </li>
            ))}
          </ol>
        </Row>
      </Container>
    </div>
  );
};

export default AdminList;
