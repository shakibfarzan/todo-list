import React, { MouseEventHandler } from 'react';
import { add } from './Icons';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const AddButton = ({ onClick }: Props): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      className="self-end py-2 pl-3 pr-6 text-white transition bg-blue-500 rounded-md w-max hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400"
    >
      <div className="flex flex-row items-center">
        {add}
        Add Task
      </div>
    </button>
  );
};

export default AddButton;
