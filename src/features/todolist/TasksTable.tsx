/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import TableBody from '../components/TableBody';
import TableHeader from '../components/TableHeader';
import { TaskType } from './tasksSlice';
import moment from 'moment';

interface Props {
  tasks: TaskType[];
}

const TasksTable = ({ tasks }: Props): React.ReactElement => {
  const [filterBy, setFilterBy] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
  const onMonthClick = (): void => {
    setFilterBy('Month');
  };

  const onWeekClick = (): void => {
    setFilterBy('Week');
  };

  const onDayClick = (): void => {
    setFilterBy('Day');
  };

  useEffect(() => {
    if (filterBy === 'Month') {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            moment(task.date).toDate().getMonth() === new Date().getMonth(),
        ),
      );
    } else if (filterBy === 'Week') {
      setFilteredTasks(
        tasks.filter((task) => moment().diff(moment(task.date), 'weeks') === 0),
      );
    } else if (filterBy === 'Day') {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            moment(task.date).toDate().getDate() === new Date().getDate(),
        ),
      );
    } else {
      setFilteredTasks(tasks);
    }
  }, [filterBy, tasks]);

  return (
    <div className="flex flex-col">
      <ButtonGroup
        items={[
          { title: 'Month', onClick: (): any => onMonthClick() },
          { title: 'Week', onClick: (): any => onWeekClick() },
          { title: 'Day', onClick: (): any => onDayClick() },
        ]}
      />
      {/* <div
        className="inline-flex rounded-md shadow self-end mt-4 mb-8"
        role="group"
      >
        <button
          onClick={onMonthClick}
          className={
            'py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:text-blue-500'
          }
        >
          Month
        </button>
        <button
          onClick={onWeekClick}
          className={
            'py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:text-blue-500'
          }
        >
          Week
        </button>
        <button
          onClick={onDayClick}
          className={
            'py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:text-blue-500'
          }
        >
          Day
        </button>
      </div> */}
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
        <TableBody tasks={filteredTasks} />
      </table>
    </div>
  );
};

export default TasksTable;
