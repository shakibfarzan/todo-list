import React, { ReactElement } from 'react';

interface Props {
  content: string;
  mode: 'warning' | 'primary' | 'success';
}

function Badge({ content, mode }: Props): ReactElement {
  let color = '';
  if (mode === 'primary') {
    color = 'blue';
  } else if (mode === 'success') {
    color = 'green';
  } else if (mode === 'warning') {
    color = 'yellow';
  }

  return (
    <span
      className={`bg-${color}-500 py-2 px-3 rounded-full text-gray-100 font-bold text-sm`}
    >
      {content}
    </span>
  );
}

export default Badge;
