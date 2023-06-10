import React, { useState, useEffect } from "react";
import "./Home.css";
import firebase from "../../firebase";
import Task from "../Task/Task";
import Input from "../Input/Input";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const firestore = firebase.firestore();

  useEffect(() => {
    const unsubscribe = firestore.collection("tasks").onSnapshot((snapshot) => {
      const updatedTasks = snapshot.docs.map((doc) => doc.data());
      setTasks(updatedTasks);
    });

    return () => unsubscribe();
  }, []);

  function addTask(task) {
    firestore.collection("tasks").add(task);
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
