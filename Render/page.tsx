"use client";

import React, { useState, useCallback, useMemo } from "react";

// Is it better to create another file and import this instead?
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Task component (optimized)
const TaskItem: React.FC<{
  task: Task;
  onToggle: (id: number) => void;
}> = React.memo(({ task, onToggle }) => {
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
});

// Set display name for TaskItem
TaskItem.displayName = "TaskItem";

// TaskManagerApp component
const TaskManagerApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      title: `Task ${i}`,
      completed: false,
    }))
  );

  const [newTask, setNewTask] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  // Memoized filtered tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  // Add new task
  const handleAddTask = useCallback(() => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length, title: newTask, completed: false },
    ]);
    setNewTask("");
  }, [newTask]);

  // Toggle task completion
  const handleToggleTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

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
