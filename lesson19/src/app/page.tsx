"use client";

import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Task component (inefficient)
const TaskItem: React.FC<{ task: Task; onToggle: (id: number) => void }> = ({
  task,
  onToggle,
}) => {
  console.log(`Rendering Task: ${task.title}`);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>
    </li>
  );
};

const TaskManagerApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      title: `Task ${i}`,
      completed: false,
    }))
  );

  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length, title: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  console.log("App rendered");

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskManagerApp;
