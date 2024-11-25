"use client";

import React, { useState, useCallback } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// að nota VIM er góð skemmtun ..fml !
const TaskItem: React.FC<{
  task: Task;
  onToggle: (id: number) => void;
}> = React.memo(function TaskItem({ task, onToggle }) {
  console.log(`Rendering Task: ${task.title}`);
  return (
    <li>
      <label>
        <input
          type="box"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>
    </li>
  );
});

const TaskManagerApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      title: `Task ${i}`,
      completed: false,
    }))
  );

  const [newTask, setNewTask] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleAddTask = useCallback(() => { 
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length, title: newTask, completed: false },
    ]);
    setNewTask("");
  }, [newTask]);

  const handleToggleTask = useCallback((id: number) => {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) return prevTasks;
      const newTasks = [...prevTasks];
      newTasks[taskIndex] = {
        ...prevTasks[taskIndex],
        completed: !prevTasks[taskIndex].completed,
      };
      return newTasks;
    });
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log("App rendered");

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskManagerApp;
