import React from 'react'
import { useAppSelector } from './app/hooks'
import PhasesList from './features/task/PhasesList/PhasesList'
import { selectSnackbar } from './features/task/taskSlice'
import Snackbar from './components/Snackbar/Snackbar/Snackbar'

function App() {
  const snackbar = useAppSelector(selectSnackbar)

  return (
    <>
      <PhasesList />
      {snackbar && <Snackbar message={snackbar} />}
    </>
  )
}

export default App
