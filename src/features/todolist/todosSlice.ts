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

export default todosSlice;
