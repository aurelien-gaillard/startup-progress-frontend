import React from 'react'
import { useGetRandomFactQuery } from '../taskApi'
import { StyledRandomFact } from './RandomFactStyles'

const RandomFact = () => {
  const { data, error, isLoading } = useGetRandomFactQuery()

  return (
    <StyledRandomFact>
      <h2>All tasks are done</h2>
      <p>Random fact:</p>
      <blockquote>
        {error ? (
          'There was an error'
        ) : isLoading ? (
          'Loading...'
        ) : data ? (
          <em>{data.text}</em>
        ) : null}
      </blockquote>
    </StyledRandomFact>
  )
}

export default RandomFact
