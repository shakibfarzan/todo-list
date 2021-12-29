import React from 'react';
import './App.css';
import TodoList from './features/todolist/TodoList';

function App(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col m-10">
        <TodoList />
      </div>
    </>
  );
}

export default App;
