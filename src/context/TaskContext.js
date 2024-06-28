import React, {createContext, useState} from 'react';

// Context for global task state.
const TaskContext = createContext();

// Provider for task state.
export const TaskProvider = ({children}) => {
  // State to hold tasks.
  const [tasks, setTasks] = useState([]);
  // Filter state: all, completed, pending.
  const [filter, setFilter] = useState('all');
  // Incremental counter for task id.
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  // Add new task
  const addTask = taskTitle => {
    setTasks([
      ...tasks,
      {id: taskIdCounter, title: taskTitle, completed: false},
    ]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  // Toggle task completion.
  const toggleTaskCompleted = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
  };

  // Compute tasks for shown by filters.
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      default:
        return true;
    }
  });

  return (
    <TaskContext.Provider
      value={{tasks: filteredTasks, addTask, toggleTaskCompleted, setFilter}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
