import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/task/taskSlice'
import { taskApi } from '../features/task/taskApi'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
