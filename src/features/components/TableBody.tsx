import React from 'react';
import PairButton from './PairButton';
import Badge from './Badge';
import { TaskType } from '../todolist/tasksSlice';
import moment from 'moment';

interface Props {
  tasks: TaskType[];
}

const TableBody = ({ tasks }: Props): React.ReactElement => {
  const renderBadge = (status: string): React.ReactElement | null => {
    switch (status) {
      case 'Done':
        return <Badge content={'Done'} mode={'success'} />;
      case 'Paused':
        return <Badge content={'Paused'} mode={'warning'} />;
      case 'In Progress':
        return <Badge content={'In Progress'} mode={'primary'} />;
    }
    return null;
  };

  return (
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id} className="border-b">
          <td className="px-1 py-6 text-center">
            <input
              className="border-2 border-gray-300 rounded focus:ring-0"
              type="checkbox"
              name="checkbox"
              id={`checkbox-${task.id}`}
            />
          </td>
          <td className="px-1 py-6 font-semibold text-center">{task.title}</td>
          <td className="px-1 py-6 text-center">{renderBadge(task.status)}</td>
          <td className="px-1 py-6 font-semibold text-center">
            {moment(task.date).format('DD MMMM YYYY')}
          </td>
          <td className="px-1 py-6 font-semibold text-center">
            {moment(task.date).format('LT')}
          </td>
          <td className="px-1 py-6 text-center">
            <PairButton id={task.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
