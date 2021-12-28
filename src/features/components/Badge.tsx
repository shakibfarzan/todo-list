import React, { ReactElement } from 'react';

interface Props {
  content: string;
  mode: 'warning' | 'primary' | 'success';
}

function Badge({ content, mode }: Props): ReactElement {
  let className = '';
  if (mode === 'primary') {
    className =
      'px-3 py-2 text-sm font-bold text-gray-100 bg-blue-500 rounded-full';
  } else if (mode === 'success') {
    className =
      'px-3 py-2 text-sm font-bold text-gray-100 bg-green-500 rounded-full';
  } else if (mode === 'warning') {
    className =
      'px-3 py-2 text-sm font-bold text-gray-100 bg-yellow-500 rounded-full';
  }

  return <span className={className}>{content}</span>;
}

export default Badge;
