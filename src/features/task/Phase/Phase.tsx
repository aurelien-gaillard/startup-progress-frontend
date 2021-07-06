import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { toggleTask } from '../taskSlice'
import { IPhase, Task } from '../taskTypes'
import { StyledPhase, StyledPhaseHeader } from './PhaseStyles'
import { FaCheck } from 'react-icons/fa'

interface Props {
  phase: IPhase
  tasks: Task[]
  isAllTasksDone: (tasks: Task[]) => boolean
}

const Phase = ({ phase, tasks, isAllTasksDone }: Props) => {
  const dispatch = useAppDispatch()
  const handleChange = (id: string) => {
    dispatch(toggleTask(id))
  }

  return (
    <StyledPhase>
      <StyledPhaseHeader>
        <h2>
          <span>{phase.stepNumber}</span>
          {phase.title}
        </h2>
        {isAllTasksDone(tasks) && <FaCheck />}
      </StyledPhaseHeader>

      <div>
        {tasks.map(({ id, isDone, description }) => (
          <div key={id}>
            <input
              type="checkbox"
              id={id}
              checked={isDone}
              onChange={() => handleChange(id)}
            />
            <label htmlFor={id}>{description}</label>
          </div>
        ))}
      </div>
    </StyledPhase>
  )
}

export default Phase
