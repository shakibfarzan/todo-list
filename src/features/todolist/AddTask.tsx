import React, { useState, useEffect } from 'react';
import AddButton from '../components/AddButton';
import { TaskType, taskAdded } from './tasksSlice';
import { useDispatch } from 'react-redux';
import AddEditModal from '../components/AddEditModal';

const AddTask = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState<Omit<TaskType, 'id'>>({
    title: '',
    status: 'In Progress',
    date: new Date().toJSON(),
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!formData.title) {
      setError('Title should not be empty!');
    } else {
      setError('');
    }
  }, [formData.title]);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onsubmit = (e: any): void => {
    e.preventDefault();
    if (formData.title) {
      dispatch(taskAdded(formData));
      closeModal();
      setFormData({
        title: '',
        status: 'In Progress',
        date: new Date().toJSON(),
      });
    }
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
      <AddEditModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleChange={handleChange}
        formData={formData}
        error={error}
        onsubmit={onsubmit}
        buttonTitle={'Add Task'}
      />
    </>
  );
};

export default AddTask;
