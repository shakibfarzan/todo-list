import {
  createSlice,
  PayloadAction,
  createSelector,
  Slice,
  Selector,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TaskType {
  id: number;
  title: string;
  status: 'Paused' | 'In Progress' | 'Done';
  date: string;
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
    taskEdited: (state, action: PayloadAction<TaskType>) => {
      const index = state.findIndex(
        (task: TaskType) => task.id === action.payload.id,
      );
      state[index].title = action.payload.title;
      state[index].status = action.payload.status;
      state[index].date = action.payload.date;
    },
    taskRemoved: (state, action: PayloadAction<Pick<TaskType, 'id'>>) => {
      const index = state.findIndex(
        (task: TaskType) => task.id === action.payload.id,
      );
      state.splice(index, 1);
    },
    taskStatusToggled: (state, action: PayloadAction<Pick<TaskType, 'id'>>) => {
      const index = state.findIndex(
        (task: TaskType) => task.id === action.payload.id,
      );
      state[index].status === 'Done'
        ? (state[index].status = 'In Progress')
        : (state[index].status = 'Done');
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

export const getTaskById = (taskId: number): Selector<RootState, TaskType> =>
  createSelector(
    (state: RootState) => state.tasks,
    (tasks) => tasks.find((task: TaskType) => task.id === taskId),
  );

export const { taskAdded, taskRemoved, taskEdited, taskStatusToggled } =
  taskSlice.actions;

export default taskSlice.reducer;
