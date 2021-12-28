import React from 'react';
import Modal from 'react-modal';
import AddButton from '../components/AddButton';
import moment from 'moment';
import { TaskType, taskAdded } from '../todolist/tasksSlice';
import { useDispatch } from 'react-redux';

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

const MyModal = (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [formData, setFormData] = React.useState<Omit<TaskType, 'id'>>({
    title: '',
    status: 'In Progress',
    date: new Date(),
  });

  const dispatch = useDispatch();

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    dispatch(taskAdded(formData));
    setIsOpen(false);
  }

  const onsubmit = (): void => {
    closeModal();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <AddButton onClick={openModal} />
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
              onChange={handleChange}
              value={formData.title}
              type="text"
              name={'title'}
              id={'title'}
              placeholder={'Title*'}
              className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-green-500 focus:border-green-500"
            />
            <select
              onChange={handleChange}
              name={'status'}
              value={formData.status}
              className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="In Progress">In Progress</option>
              <option value="Paused">Paused</option>
              <option value="Done">Done</option>
            </select>
            <input
              onChange={handleChange}
              className="mb-3 border border-gray-300 border-solid rounded-md focus:ring-green-500 focus:border-green-500"
              type="datetime-local"
              name={'date'}
              id={'datetime'}
              value={moment(formData.date).format('yyyy-MM-DDThh:mm')}
            />
            <button
              className="px-4 py-2 text-sm font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400"
              onClick={onsubmit}
            >
              Add Task
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
