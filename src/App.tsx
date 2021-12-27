import React from 'react';
import './App.css';
import TodoList from './features/todolist/TodoList';
import MyTabs from './features/components/MyTabs';

function App(): React.ReactElement {
  return (
    <div className="flex flex-col mx-4 my-10">
      <MyTabs
        items={[
          { id: 1, title: 'To Do', content: <TodoList /> },
          { id: 2, title: 'Done Tasks', content: <TodoList /> },
        ]}
      />
    </div>
  );
}

export default App;
