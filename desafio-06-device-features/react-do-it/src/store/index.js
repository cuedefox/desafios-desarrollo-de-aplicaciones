import { configureStore } from '@reduxjs/toolkit';

import statsReducer from './stats/stats.slice.js';
import tasksReducer from './tasks/tasks.slice.js';
import profileReducer from './profile/profile.slice.js';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    stats: statsReducer,
    profile: profileReducer
  }
});
