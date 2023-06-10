import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [task, setTask] = useState({});

  const updateData = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    props.onAdd(task);
    e.preventDefault();
  };

  return (
    <div>
      <form className="input__form" onSubmit={handleSubmit}>
        <input
          name="title"
          className="input__title"
          placeholder="Title"
          onChange={updateData}
        />
        <textarea
          name="description"
          placeholder="Add a Task..."
          rows="3"
          onChange={updateData}
        />
        <input
          name="deadline"
          className="input__deadline"
          placeholder="[end date]"
          onChange={updateData}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Input;
