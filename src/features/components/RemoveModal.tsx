import React from 'react';
import Modal from 'react-modal';
interface Props {
  isOpen: boolean;
  closeModal: React.MouseEventHandler;
  onRemove: React.MouseEventHandler;
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-slate-900">
          Are you sure to remove this task?
        </h2>
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

export default RemoveModal;
