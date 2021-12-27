import React from 'react';
import './App.css';
import TodoList from './features/todolist/TodoList';
import AddButton from './features/components/AddButton';

function App(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col mx-4 my-10">
        <AddButton />
        <TodoList />
      </div>
    </>
  );
}

export default App;
