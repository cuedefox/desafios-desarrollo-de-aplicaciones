import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './auth/api/index.js';
import authReducer from './auth/auth.slice.js';
import profileReducer from './profile/profile.slice.js';
import statsReducer from './stats/stats.slice.js';
import tasksReducer from './tasks/tasks.slice.js';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    stats: statsReducer,
    profile: profileReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
});
