import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matcher

describe('Task Component', () => {
  const task = {
    id: 1,
    text: 'Test Task',
    category: 'Work',
  };

  it('renders the task text and category', () => {
    
    // Check if the task text and category are rendered
  });

  it('calls onDelete when the delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    
    // Click the delete button
  

    // Check if onDelete was called
    
  });
});
