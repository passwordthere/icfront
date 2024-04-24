import React from 'react';
import { TodoForm } from '../components/forms/TodoForm';

export const Work: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div>
      <TodoForm />
    </div>
  );
};
