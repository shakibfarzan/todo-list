import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType, taskEdited, taskRemoved, getTaskById } from './tasksSlice';
import AddEditModal from '../components/AddEditModal';
import RemoveModal from '../components/RemoveModal';
import { remove, edit } from '../components/Icons';

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
    date: new Date().toJSON(),
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
    dispatch(taskRemoved({ id: id }));
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
          {edit}
        </button>
        <button
          onClick={openRemoveModal}
          className="p-2 transition rounded-full hover:bg-red-100"
        >
          {remove}
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
