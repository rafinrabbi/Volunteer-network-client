import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import { fakeData } from "../../fakeData/fakeData";
import logo from "../../resources/icons/logo.png";
import "./VolunteerRegister.css";
import { UserContext } from "../../App";
import { ErrorMessage } from "@hookform/error-message";

const VolunteerRegister = () => {
  let { activityId } = useParams();
  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const activity = fakeData.find(
    (actv) => actv.id.toString() === activityId.toString()
  );
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (values) => {
    fetch("https://secret-caverns-37131.herokuapp.com/addUserActivity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Activity has been successfully Added");
          history.push("/selectedActivities");
        }
      });
  };

  return (
    <div
      style={{ marginBottom: 30 }}
      className="container col-lg-6 justify-content-md-center"
    >
      <div className="row mb-5 justify-content-md-center">
        <center>
          <img className="" src={logo} alt="" />
          <h1 className="mt-5 text-center">Register As A Volunteer</h1>
        </center>
      </div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            name="fullName"
            placeholder="FullName"
            defaultValue={loggedInUser.name}
            className={`form-control`}
            ref={register({ required: "Name is required" })}
          />
        </div>
        <ErrorMessage
          className="invalid-feedback"
          name="fullName"
          as="div"
          errors={errors}
        />
        <div className="form-group">
          <label htmlFor="">UserName or Email</label>
          <input
            name="email"
            placeholder="Enter email"
            defaultValue={loggedInUser.email}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address format",
              },
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="email"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            placeholder="date"
            type="date"
            className={`form-control`}
            ref={register({ required: "Date is required" })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="date"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            placeholder="description"
            className={`form-control`}
            ref={register({ required: "Description is required" })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="description"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedActivity">Selected Activity</label>
          <input
            name="selectedActivity"
            placeholder="selectedActivity"
            defaultValue={activity.name}
            className={`form-control`}
            ref={register({ required: "Selected Activity is required" })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="selectedActivity"
            as="div"
            errors={errors}
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerRegister;
