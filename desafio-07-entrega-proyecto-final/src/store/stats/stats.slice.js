import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksCreated: 0,
  tasksCompleted: 0,
  tasksEliminated: 0
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    createdTask: (state, action) => {
      state.tasksCreated += 1;
    },
    checkedTask: (state, action) => {
      state.tasksCompleted += 1;
    },
    deletedTask: (state, action) => {
      state.tasksEliminated += 1;
    },
    getStats: (state, action) => {
      const { tasksCreated, tasksCompleted, tasksEliminated } = action.payload;
      return {
        ...state,
        tasksCreated,
        tasksCompleted,
        tasksEliminated,
      };
    }
  }
});

export const { createdTask, checkedTask, deletedTask, getStats } = statsSlice.actions;

export default statsSlice.reducer;
