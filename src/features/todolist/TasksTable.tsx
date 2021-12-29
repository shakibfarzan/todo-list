/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import TableBody from '../components/TableBody';
import TableHeader from '../components/TableHeader';
import { TaskType } from './tasksSlice';

interface Props {
  tasks: TaskType[];
}

const TasksTable = ({ tasks }: Props): React.ReactElement => {
  return (
    <div className="flex flex-col">
      <ButtonGroup
        items={[
          { title: 'Month', onClick: () => {} },
          { title: 'Week', onClick: () => {} },
          { title: 'Day', onClick: () => {} },
        ]}
      />
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
    </div>
  );
};

export default TasksTable;
