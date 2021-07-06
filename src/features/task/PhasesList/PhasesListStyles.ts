import styled from 'styled-components'
import { theme } from '../../../theme'

export const StyledPhasesList = styled.div`
  background-color: ${theme.colors.background};
  padding: ${theme.sizes.s4};
  display: flex;
  justify-content: center;

  main {
    background-color: ${theme.colors.white};
    padding: ${theme.sizes.s4};
    @media (min-width: 450px) {
      min-width: 400px;
      max-width: 400px;
    }
  }
`
