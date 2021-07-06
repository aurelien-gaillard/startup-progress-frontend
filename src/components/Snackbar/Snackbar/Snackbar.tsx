import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { resetSnackbar } from '../../../features/task/taskSlice'
import { StyledSnackbar } from './SnackbarStyles'

interface Props {
  message: string
}
const Snackbar = ({ message }: Props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(resetSnackbar())
    }, 5000)
    return () => clearTimeout(timeout)
  }, [dispatch])

  return <StyledSnackbar>{message}</StyledSnackbar>
}

export default Snackbar
