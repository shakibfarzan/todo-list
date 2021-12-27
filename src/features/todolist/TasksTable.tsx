import React from 'react';
import TableBody from '../components/TableBody';
import TableHeader from '../components/TableHeader';
import { TaskType } from './tasksSlice';

interface Props {
  tasks: TaskType[];
}

const TasksTable = ({ tasks }: Props): React.ReactElement => {
  return (
    <table className="w-full mt-5">
      <TableHeader
        columns={[
          { id: 1, title: '' },
          { id: 2, title: 'Tasks' },
          { id: 3, title: 'Status' },
          { id: 4, title: 'Date' },
          { id: 5, title: 'Time' },
          { id: 6, title: '' },
        ]}
      />
      <TableBody tasks={tasks} />
    </table>
  );
};

export default TasksTable;
