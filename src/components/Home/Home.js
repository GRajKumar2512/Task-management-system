import React from "react";
import "./Home.css";
import Task from "../Task/Task";

const Home = () => {
  return (
    <div className="board">
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default Home;
