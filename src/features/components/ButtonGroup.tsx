import React from 'react';

interface Item {
  title: string;
  onClick: React.MouseEventHandler;
}

interface Props {
  items: Item[];
}

const ButtonGroup = ({ items }: Props): React.ReactElement => {
  const generateClassName = (index: number, length: number): string => {
    if (index === 0) {
      return 'py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:text-blue-500';
    } else if (index === length - 1) {
      return 'py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:text-blue-500';
    } else {
      return 'py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:text-blue-500';
    }
  };

  return (
    <div
      className="inline-flex rounded-md shadow self-end mt-4 mb-8"
      role="group"
    >
      {items.map((item, index) => (
        <button
          key={item.title}
          onClick={item.onClick}
          className={generateClassName(index, items.length)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
