import React from 'react';
import { TodoForm } from '../components/forms/TodoForm';

export const Work: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div>
      This is work page content.
      <br />
      {electron.homeDir()}
      <br />
      {electron.arch()}
      <br />
      <TodoForm />
    </div>
  );
};
