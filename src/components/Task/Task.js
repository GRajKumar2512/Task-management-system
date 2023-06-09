import React from "react";
import "./Task.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import calendar from "../../images/calendar.png";
import user from "../../images/user.png";

const Task = ({ title, description, deadline }) => {
  return (
    <div className="task__container">
      <div className="task__header">
        <span className="task__deadline">
          <img src={calendar} className="calendar" />
          {deadline}
        </span>
      </div>
      <h1 className="task__title">{title}</h1>
      <p className="task__description">{description}</p>
      <div className="task__footer">
        <span className="task__assigned">
          <img src={user} className="user" />
          Assign by HR
        </span>
        <button
          type="button"
          className="btn btn-success"
          style={{
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".5rem",
          }}
        >
          done
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={{
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".5rem",
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Task;
