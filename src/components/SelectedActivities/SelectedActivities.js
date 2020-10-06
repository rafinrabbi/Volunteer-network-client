import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import InsideHeader from "../InsideHeader/InsideHeader";
import SelectedActivity from "../SelectedActivity/SelectedActivity";
import { UserContext } from "../../App";

const SelectedActivities = () => {
  const [activties, setActivities] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://secret-caverns-37131.herokuapp.com/userActivities?email=" + loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <InsideHeader></InsideHeader>
      <Container style={{ display: "flex", marginTop: 40 }}>
        <Row>
          {activties.map((actv) => (
            <SelectedActivity key={actv.id} activity={actv}></SelectedActivity>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SelectedActivities;
