import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType, taskEdited, taskRemoved, getTaskById } from './tasksSlice';
import AddEditModal from '../components/AddEditModal';
import RemoveModal from '../components/RemoveModal';

interface Props {
  id: number;
}

const EditRemoveTask = ({ id }: Props): React.ReactElement => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [formData, setFormData] = useState<TaskType>({
    id: id,
    title: '',
    status: 'In Progress',
    date: new Date(),
  });
  const [error, setError] = useState('');
  const currentTask = useSelector(getTaskById(id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!formData.title) {
      setError('Title should not be empty!');
    } else {
      setError('');
    }
  }, [formData.title]);

  useEffect(() => {
    setFormData({
      id: currentTask.id,
      title: currentTask.title,
      status: currentTask.status,
      date: currentTask.date,
    });
  }, [currentTask.id, currentTask.date, currentTask.status, currentTask.title]);

  function openEditModal(): void {
    setIsEditModalOpen(true);
  }

  function openRemoveModal(): void {
    setIsRemoveModalOpen(true);
  }

  function closeEditModal(): void {
    setIsEditModalOpen(false);
  }

  function closeRemoveModal(): void {
    setIsRemoveModalOpen(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEdit = (e: any): void => {
    e.preventDefault();
    if (formData.title) {
      dispatch(taskEdited(formData));
      closeEditModal();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRemove = (e: any): void => {
    e.preventDefault();
    dispatch(taskRemoved(formData.id));
    closeRemoveModal();
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
      <div key={id} className="inline-flex">
        <button
          onClick={openEditModal}
          className="p-2 transition rounded-full hover:bg-blue-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className="text-blue-500 fill-current"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z" />
                </g>
                <g>
                  <path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z" />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button
          onClick={openRemoveModal}
          className="p-2 transition rounded-full hover:bg-red-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className="text-red-500 fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
      </div>
      <AddEditModal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        handleChange={handleChange}
        formData={formData}
        error={error}
        onsubmit={onEdit}
        buttonTitle={'Edit Task'}
      />
      <RemoveModal
        isOpen={isRemoveModalOpen}
        closeModal={closeRemoveModal}
        onRemove={onRemove}
        taskTitle={formData.title}
      />
    </>
  );
};

export default EditRemoveTask;
