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
  status: 'Paused' | 'In Progress' | 'Done';
  date: Date;
}

const initialState: TaskType[] = [];

let lastId = 0;

const taskSlice: Slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: (state, action: PayloadAction<Omit<TaskType, 'id'>>) => {
      state.push({ id: lastId++, ...action.payload });
    },
  },
});

export const getUnDoneTasks = createSelector(
  (state: RootState) => state.tasks,
  (tasks) => tasks.filter((task: TaskType) => task.status !== 'Done'),
);

export const getDoneTasks = createSelector(
  (state: RootState) => state.tasks,
  (tasks) => tasks.filter((task: TaskType) => task.status === 'Done'),
);

export const { taskAdded } = taskSlice.actions;

export default taskSlice.reducer;
