export interface IPhase {
  id: string
  stepNumber: number
  title: string
}

export interface Task {
  id: string
  phaseId: string
  description: string
  isDone: boolean
  phase: IPhase
}

export interface IRandomFact {
  id: string
  language: string
  permalink: string
  source: string
  source_url: string
  text: string
}
