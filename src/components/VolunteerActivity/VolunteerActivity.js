import React from "react";
import { Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./VolunteerActivity.css";

const VolunteerActivity = (props) => {
  const { image, name, id, color } = props.activity;

  return (
    <>
      <Col md={6} lg={3}>
        <Link to={"/volunteerRegister/" + id}>
          <Card
            className="activityCard"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <Card.Img style={{ width: "100%", height: "100%" }} src={image} />
              <Card.Footer
                style={{
                  backgroundColor: color,
                  color: "white",
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
            {name}
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default VolunteerActivity;
