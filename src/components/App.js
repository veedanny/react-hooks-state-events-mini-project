import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TASK from './data/tasks'; // Assuming data is imported from this file
import CATEGORY from './data/categories'; // Assuming data is imported from this file

function App() {
  const [tasks, setTasks] = useState(TASK);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={CATEGORY} 
        onCategoryChange={handleCategoryChange} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onTaskDelete={(id) => setTasks(tasks.filter(task => task.id !== id))}
      />
      <NewTaskForm 
        categories={CATEGORY.filter(cat => cat !== 'All')} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
    </div>
  );
}

export default App;
