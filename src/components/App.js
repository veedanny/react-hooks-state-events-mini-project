import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const App = () => {
  // Initial data
  const initialTasks = [
    { id: 1, text: 'Do the dishes', category: 'Chores' },
    { id: 2, text: 'Finish homework', category: 'School' },
    // Add more tasks as needed
  ];

  const categories = ['All', 'Chores', 'School']; // List of categories

  // State for tasks and selected category
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handler to delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Handler to add a new task
  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
      <NewTaskForm 
        categories={categories.filter(cat => cat !== 'All')} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
    </div>
  );
};

export default App;
