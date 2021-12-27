import React from 'react';

const AddButton = (): React.ReactElement => {
  return (
    <button className="self-end py-2 pl-3 pr-6 text-white transition bg-blue-500 rounded-md w-max hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400">
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          className="mr-2 text-white fill-current"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        Add Task
      </div>
    </button>
  );
};

export default AddButton;
