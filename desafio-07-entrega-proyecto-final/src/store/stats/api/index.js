import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

export const statsApi = createApi({
  reducerPath: 'statsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  tagTypes: ['stats'],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: ({ localId }) => ({
        url: `/users/${localId}.json`,
        method: 'GET'
      })
    }),
    updateImageProfile: builder.mutation({
      query: ({ localId, image }) => ({
        url: `/users/${localId}.json`,
        method: 'PATCH',
        body: { profileImage: image }
      })
    }),
    updateStats: builder.mutation({
      query: ({ localId, tasksCreated, tasksCompleted, tasksEliminated }) => ({
        url: `/users/${localId}.json`,
        method: 'PATCH',
        body: {
          tasksCompleted,
          tasksCreated,
          tasksEliminated
        }
      })
    })
  })
});

export const {
  useGetProfileQuery,
  useUpdateImageProfileMutation,
  useUpdateStatsMutation
} = statsApi;
