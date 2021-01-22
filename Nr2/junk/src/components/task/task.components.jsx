import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Task = () => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted");
  };
  const [tasks, setTasks] = useState([
    { id: 1, text: "Football", reminder: true, day: " -March 22th at 20:30" },
    {
      id: 2,
      text: "Lunch Meeting",
      day: " -May 4th at 16:45",
      reminder: true,
    },
    {
      id: 3,
      text: "Holliday in Bahamas",
      reminder: true,
      day: " -July 25th at 00:00",
    },
  ]);

  return (
    <div>
      {tasks.map((task) => (
        <h3
          key={task.id}
          style={{
            margin: "20px",
            backgroundColor: "#cee1f4",
            justifyContent: "center",
          }}
        >
          {task.text}
          <FaTimes
            onClick={() => deleteTask(task.id)}
            style={{
              color: " red",
              paddingLeft: "370px",
              position: "absolute",
              display: "flex",
              margin: "-8px 57px",
              cursor: "pointer",
            }}
          />
          <p>{task.day}</p>
        </h3>
      ))}
    </div>
  );
};

export { Task };
