import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectPhases, selectTasks, setInitialTasks } from '../taskSlice'
import Phase from '../Phase/Phase'

import { StyledPhasesList } from './PhasesListStyles'
import RandomFact from '../RandomFact/RandomFact'
import { Task } from '../taskTypes'

const PhasesList = () => {
  const dispatch = useAppDispatch()
  const phases = useAppSelector(selectPhases)
  const tasks = useAppSelector(selectTasks)

  const isAllTasksDone = (tasks: Task[]) =>
    tasks.filter((task) => !task.isDone).length === 0

  // When mounting, we get back the tasks state from localStorage
  useEffect(() => {
    const tasksStored = localStorage.getItem('tasks')
    dispatch(setInitialTasks(tasksStored))
  }, [dispatch])

  //For each change of tasks, we save the state in localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  return (
    <StyledPhasesList>
      <main>
        <h1>My startup progress</h1>

        {phases.map((phase) => (
          <Phase
            key={phase.id}
            phase={phase}
            tasks={tasks.filter((task) => task.phaseId === phase.id)}
            isAllTasksDone={isAllTasksDone}
          />
        ))}
        {isAllTasksDone(tasks) && <RandomFact />}
      </main>
    </StyledPhasesList>
  )
}

// React.memo used to prevent re-render with snackbar component
export default React.memo(PhasesList)
