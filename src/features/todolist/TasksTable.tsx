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
  const [sortByTitle, setSortByTitle] = useState('');
  const onMonthClick = (): void => {
    setFilterBy('Month');
  };

  const onWeekClick = (): void => {
    setFilterBy('Week');
  };

  const onDayClick = (): void => {
    setFilterBy('Day');
  };

  const onSort = (): void => {
    if (sortByTitle === 'asc') {
      setSortByTitle('desc');
    } else {
      setSortByTitle('asc');
    }
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
      <table className="w-full mt-5">
        <TableHeader
          columns={[
            { id: 1, title: '', onClick: (): any => onSort() },
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
