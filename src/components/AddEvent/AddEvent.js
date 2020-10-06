import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => {
    fetch("https://secret-caverns-37131.herokuapp.com/addEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Activity has been successfully Added");
        }
      });
    console.log(values);
  };

  return (
    <div
      style={{ marginBottom: 30 }}
      className="container col-lg-6 justify-content-md-center"
    >
      <center>
        <h1>Add A New Event</h1>
      </center>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="eventTitle">Event Title</label>
          <input
            name="title"
            placeholder="Enter Title"
            className={`form-control`}
            ref={register}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="title"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date</label>
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
        <button className="btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
