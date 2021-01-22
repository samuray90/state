import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Football", reminder: true, day: " -March 22th at 2:30" },
    {
      id: 2,
      text: "Meeting for Lunch",
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
        <h3 key={task.id} style={{ margin: "20px" }}>
          {task.text}
          {task.day}
        </h3>
      ))}
      <h4></h4>
    </div>
  );
};

export { Task };
