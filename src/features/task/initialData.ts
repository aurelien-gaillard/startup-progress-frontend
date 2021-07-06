import { IPhase, Task } from './taskTypes'

const phase1: IPhase = {
  id: '1',
  stepNumber: 1,
  title: 'Foundation',
}
const phase2: IPhase = {
  id: '2',
  stepNumber: 2,
  title: 'Discovery',
}
const phase3: IPhase = {
  id: '3',
  stepNumber: 3,
  title: 'Delivery',
}

export const initialPhases: IPhase[] = [phase1, phase2, phase3]

export const initialTasks: Task[] = [
  {
    id: '1',
    phaseId: '1',
    description: 'Setup virtual office',
    isDone: true,
    phase: phase1,
  },
  {
    id: '2',
    phaseId: '1',
    description: 'Set mission & vision',
    isDone: true,
    phase: phase1,
  },
  {
    id: '3',
    phaseId: '1',
    description: 'Set mission & vision',
    isDone: true,
    phase: phase1,
  },
  {
    id: '4',
    phaseId: '1',
    description: 'Buy domains',
    isDone: true,
    phase: phase1,
  },
  {
    id: '5',
    phaseId: '2',
    description: 'Create roadmap',
    isDone: true,
    phase: phase2,
  },
  {
    id: '6',
    phaseId: '2',
    description: 'Competitor analysis',
    isDone: false,
    phase: phase2,
  },
  {
    id: '7',
    phaseId: '3',
    description: 'Release marketing website',
    isDone: false,
    phase: phase3,
  },
  {
    id: '8',
    phaseId: '3',
    description: 'Release MVP',
    isDone: false,
    phase: phase3,
  },
]
