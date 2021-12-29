import React from 'react';

interface Column {
  id: number;
  title: string | HTMLElement;
  onClick?: React.MouseEventHandler;
}

interface Props {
  columns: Column[];
}

const TableHeader = ({ columns }: Props): React.ReactElement => {
  return (
    <thead className="border-solid border-y">
      <tr>
        {columns.map((column) => (
          <th
            key={column.id}
            onClick={column.onClick && column.onClick}
            className="py-3 font-semibold text-gray-500"
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
