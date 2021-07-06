import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { initialPhases, initialTasks } from './initialData'
import { IPhase, Task } from './taskTypes'

// Define a type for the slice state
interface TaskState {
  tasks: Task[]
  phases: IPhase[]
  snackbar: string | null
}

// Define the initial state using that type
const initialState: TaskState = {
  tasks: [],
  phases: initialPhases,
  snackbar: null,
}

export const taskSlice = createSlice({
  name: 'task',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setInitialTasks: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state.tasks = JSON.parse(action.payload)
      } else {
        state.tasks = initialTasks
      }
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id == action.payload)

      if (task) {
        // if task is checked, we can uncheck it without rule
        if (task.isDone) {
          task.isDone = false
        }
        // To be able to check a task, all tasks from previous pahse must be checked
        else {
          const tasksPreviousPhasesNotDone = state.tasks.filter(
            (item) =>
              item.phase.stepNumber < task.phase.stepNumber && !item.isDone
          )
          if (tasksPreviousPhasesNotDone.length > 0) {
            state.snackbar =
              'You must first finish all tasks from previous phases'
          } else {
            task.isDone = true
          }
        }
      }
    },
    resetSnackbar: (state) => {
      state.snackbar = null
    },
  },
})

export const { setInitialTasks, toggleTask, resetSnackbar } = taskSlice.actions

// Selectors
export const selectPhases = (state: RootState) => state.task.phases
export const selectTasks = (state: RootState) => state.task.tasks
export const selectSnackbar = (state: RootState) => state.task.snackbar

export default taskSlice.reducer
