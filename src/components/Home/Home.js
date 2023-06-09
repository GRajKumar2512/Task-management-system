import React, { useState } from "react";
import "./Home.css";
import Task from "../Task/Task";
import Input from "../Input/Input";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  return (
    <div className="task__board">
      <Input onAdd={addTask} />
      {tasks.map((taskItem) => {
        return (
          <Task
            title={taskItem.title}
            description={taskItem.description}
            deadline={taskItem.deadline}
          />
        );
      })}
    </div>
  );
};

export default Home;
