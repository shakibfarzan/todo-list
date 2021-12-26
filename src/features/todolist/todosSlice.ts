import {
  createSlice,
  PayloadAction,
  createSelector,
  Slice,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TodoType {
  id: number;
  task: string;
  status: 'paused' | 'in progress' | 'done';
  date: Date;
  time: Date;
}

const initialState: TodoType[] = [];

let lastId = 0;

const todosSlice: Slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    taskAdded: (
      state,
      action: PayloadAction<Omit<TodoType, 'time' | 'id'>>,
    ) => {
      state.push({ id: lastId++, time: Date.now(), ...action.payload });
    },
  },
});

export const getUnDoneTodos = createSelector(
  (state: RootState) => state,
  (todos) => todos.filter((todo: TodoType) => todo.status !== 'done'),
);

export const getDoneTodos = createSelector(
  (state: RootState) => state,
  (todos) => todos.filter((todo: TodoType) => todos.status === 'done'),
);
export default todosSlice;
