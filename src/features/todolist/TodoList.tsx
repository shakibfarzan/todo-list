import React from 'react';
import PairButton from '../components/PairButton';
import Badge from '../components/Badge';
const TodoList = (): React.ReactElement => {
  return (
    <table className="mt-5">
      <thead className="border-solid border-y">
        <tr>
          <th className="py-3"></th>
          <th className="py-3 text-gray-500 font-semibold">Tasks</th>
          <th className="py-3 text-gray-500 font-semibold">Status</th>
          <th className="py-3 text-gray-500 font-semibold">Date</th>
          <th className="py-3 text-gray-500 font-semibold">Time</th>
          <th className="py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="text-center py-6 px-1">
            <input
              className="rounded border-gray-300 border-2 focus:ring-0"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
          </td>
          <td className="text-center font-semibold py-6 px-1">Task 1</td>
          <td className="text-center py-6 px-1">
            <Badge content="Paused" mode="warning" />
          </td>
          <td className="text-center font-semibold py-6 px-1">
            21 October 2021
          </td>
          <td className="text-center font-semibold py-6 px-1">09:30 AM</td>
          <td className="text-center py-6 px-1">
            <PairButton />
          </td>
        </tr>
        <tr className="border-b">
          <td className="text-center py-6 px-1">
            <input
              className="rounded border-gray-300 border-2 focus:ring-0"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
          </td>
          <td className="text-center py-6 px-1 font-semibold">Task 1</td>
          <td className="text-center py-6 px-1">
            <Badge content={'In progress'} mode={'primary'} />
          </td>
          <td className="text-center py-6 px-1 font-semibold">
            21 October 2021
          </td>
          <td className="text-center py-6 px-1 font-semibold">09:30 AM</td>
          <td className="text-center py-6 px-1">
            <PairButton />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodoList;
