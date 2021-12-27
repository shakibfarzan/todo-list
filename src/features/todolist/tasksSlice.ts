import {
  createSlice,
  PayloadAction,
  createSelector,
  Slice,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TaskType {
  id: number;
  title: string;
  status: 'paused' | 'in progress' | 'done';
  date: Date;
  time: Date;
}

const initialState: TaskType[] = [];

let lastId = 0;

const taskSlice: Slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: (
      state,
      action: PayloadAction<Omit<TaskType, 'time' | 'id'>>,
    ) => {
      state.push({ id: lastId++, time: Date.now(), ...action.payload });
    },
  },
});

export const getUnDoneTasks = createSelector(
  (state: RootState) => state,
  (tasks) => tasks.filter((task: TaskType) => task.status !== 'done'),
);

export const getDoneTasks = createSelector(
  (state: RootState) => state,
  (tasks) => tasks.filter((task: TaskType) => tasks.status === 'done'),
);
export default taskSlice;
