import React, { memo } from 'react';
import Modal from 'react-modal';
import { close } from './Icons';
interface Props {
  isOpen: boolean;
  closeModal: React.MouseEventHandler;
  onRemove: React.MouseEventHandler;
  taskTitle: string;
}

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const RemoveModal = ({
  isOpen,
  closeModal,
  onRemove,
  taskTitle,
}: Props): React.ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="flex flex-col">
        <button
          className="self-end p-2 transition rounded-full hover:bg-gray-200"
          onClick={closeModal}
        >
          {close}
        </button>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Are you sure to remove this task?
        </h2>
        <p className="mb-12 text-base font-bold text-slate-900">
          <span className="font-normal text-slate-700">Task: </span>
          {taskTitle}
        </p>
        <button
          onClick={onRemove}
          className="px-4 py-2 text-sm font-semibold text-white transition bg-red-500 rounded-md hover:bg-red-600 hover:shadow-md hover:shadow-red-400"
        >
          Remove
        </button>
      </div>
    </Modal>
  );
};

export default memo(RemoveModal);
