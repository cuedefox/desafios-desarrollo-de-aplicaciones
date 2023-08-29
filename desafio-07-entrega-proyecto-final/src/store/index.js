import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './auth/api/index.js';
import { statsApi } from './stats/api/index.js';
import authReducer from './auth/auth.slice.js';
import profileReducer from './profile/profile.slice.js';
import tasksReducer from './tasks/tasks.slice.js';
import statsReducer from './stats/stats.slice.js';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    profile: profileReducer,
    auth: authReducer,
    stats: statsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, statsApi.middleware)
});
