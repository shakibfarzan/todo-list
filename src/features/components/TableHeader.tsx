import React from 'react';

interface Column {
  id: number;
  title: string | React.ReactElement;
  onClick?: React.MouseEventHandler;
}

interface Props {
  columns: Column[];
}

const TableHeader = ({ columns }: Props): React.ReactElement => {
  return (
    <thead className="border-solid border-y">
      <tr>
        {columns.map((column, index) => (
          <th
            key={column.id}
            onClick={column.onClick && column.onClick}
            className={
              index !== 0
                ? 'py-3 font-semibold text-gray-500'
                : 'py-3 font-semibold text-gray-500 flex justify-center cursor-pointer'
            }
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
