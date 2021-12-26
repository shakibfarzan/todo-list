import React from 'react';
import './App.css';
import TodoList from './features/todolist/TodoList';

function App(): React.ReactElement {
  return (
    <div className="flex flex-col my-10 mx-4">
      <h1 className="text-center text-red-500 text-xl">Hello</h1>
      <TodoList />
    </div>
  );
}

export default App;
