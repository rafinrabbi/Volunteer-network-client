import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import VolunteerActivity from "../VolunteerActivity/VolunteerActivity";
import "./VolunteerActivities.css";

const VolunteerActivities = () => {
  const [activties, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://secret-caverns-37131.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <Container style={{ display: "flex", marginTop: 40 }}>
      <Row>
        {activties.map((actv) => (
          <VolunteerActivity key={actv.id} activity={actv}></VolunteerActivity>
        ))}
      </Row>
    </Container>
  );
};

export default VolunteerActivities;
