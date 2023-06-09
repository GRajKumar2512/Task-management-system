import React from "react";
import "./Home.css";
import Task from "../Task/Task";

const Home = () => {
  return (
    <div className="task__board">
      <Task
        title="Design landing page"
        description="solution until you have a clear idea of what the problem is collect information. Collect sketches, take.."
        deadline="9th june"
      />
      <Task
        title="Fixing Bug in ioS app"
        description="A software bug is a flaw, fault or error in a computer program that causes it to produce..."
        deadline="9th june"
      />
    </div>
  );
};

export default Home;
