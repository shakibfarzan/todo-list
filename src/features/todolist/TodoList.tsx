import React from 'react';
import MyTabs from '../components/MyTabs';
import TasksTable from './TasksTable';
import { getDoneTasks, getUnDoneTasks } from './tasksSlice';
import { useSelector } from 'react-redux';

const TodoList = (): React.ReactElement => {
  const unDoneTasks = useSelector(getUnDoneTasks);
  const doneTasks = useSelector(getDoneTasks);
  return (
    <MyTabs
      items={[
        {
          id: 1,
          title: 'To Do',
          content: <TasksTable tasks={unDoneTasks} />,
        },
        {
          id: 2,
          title: 'Done Tasks',
          content: <TasksTable tasks={doneTasks} />,
        },
      ]}
    />
  );
};

export default TodoList;
