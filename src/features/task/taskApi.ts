import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRandomFact } from './taskTypes'

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://uselessfacts.jsph.pl/' }),
  endpoints: (builder) => ({
    getRandomFact: builder.query<IRandomFact, void>({
      query: () => `random.json`,
      keepUnusedDataFor: 0,
    }),
  }),
})

export const { useGetRandomFactQuery } = taskApi
