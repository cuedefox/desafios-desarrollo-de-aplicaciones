import { configureStore } from '@reduxjs/toolkit';

import statsReducer from './stats/stats.slice.js';
import tasksReducer from './tasks/tasks.slice.js';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    stats: statsReducer
  }
});
