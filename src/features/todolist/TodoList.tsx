import React from 'react';
import PairButton from '../components/PairButton';
import Badge from '../components/Badge';
const TodoList = (): React.ReactElement => {
  return (
    <table className="w-full mt-5">
      <thead className="border-solid border-y">
        <tr>
          <th className="py-3"></th>
          <th className="py-3 font-semibold text-gray-500">Tasks</th>
          <th className="py-3 font-semibold text-gray-500">Status</th>
          <th className="py-3 font-semibold text-gray-500">Date</th>
          <th className="py-3 font-semibold text-gray-500">Time</th>
          <th className="py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="px-1 py-6 text-center">
            <input
              className="border-2 border-gray-300 rounded focus:ring-0"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
          </td>
          <td className="px-1 py-6 font-semibold text-center">Task 1</td>
          <td className="px-1 py-6 text-center">
            <Badge content="Paused" mode="warning" />
          </td>
          <td className="px-1 py-6 font-semibold text-center">
            21 October 2021
          </td>
          <td className="px-1 py-6 font-semibold text-center">09:30 AM</td>
          <td className="px-1 py-6 text-center">
            <PairButton />
          </td>
        </tr>
        <tr className="border-b">
          <td className="px-1 py-6 text-center">
            <input
              className="border-2 border-gray-300 rounded focus:ring-0"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
          </td>
          <td className="px-1 py-6 font-semibold text-center">Task 1</td>
          <td className="px-1 py-6 text-center">
            <Badge content={'In progress'} mode={'primary'} />
          </td>
          <td className="px-1 py-6 font-semibold text-center">
            21 October 2021
          </td>
          <td className="px-1 py-6 font-semibold text-center">09:30 AM</td>
          <td className="px-1 py-6 text-center">
            <PairButton />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodoList;
