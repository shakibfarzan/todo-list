import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { TaskType } from '../todolist/tasksSlice';

interface Props {
  isOpen: boolean;
  closeModal: React.MouseEventHandler;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: any;
  formData: Omit<TaskType, 'id'>;
  error: string;
  onsubmit: React.MouseEventHandler;
  buttonTitle: string;
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

Modal.setAppElement('#root');

const AddEditModal = ({
  isOpen,
  closeModal,
  handleChange,
  formData,
  error,
  onsubmit,
  buttonTitle,
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
        <form className="flex flex-col p-3 sm:w-96">
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={handleChange}
            value={formData.title}
            type="text"
            name={'title'}
            id={'title'}
            placeholder={'Title*'}
            className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
          <select
            onChange={handleChange}
            name={'status'}
            value={formData.status}
            className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="In Progress">In Progress</option>
            <option value="Paused">Paused</option>
            <option value="Done">Done</option>
          </select>
          <input
            onChange={handleChange}
            className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            type="datetime-local"
            name={'date'}
            id={'datetime'}
            value={moment(formData.date).format('yyyy-MM-DDTHH:mm')}
          />
          <button
            className="px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400"
            onClick={onsubmit}
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditModal;
