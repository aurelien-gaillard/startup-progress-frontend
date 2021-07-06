import styled from 'styled-components'
import { theme } from '../../../theme'

export const StyledPhase = styled.div`
  label {
    padding-left: ${theme.sizes.s1};
  }
`

export const StyledPhaseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.sizes.s4};
  padding-bottom: ${theme.sizes.s3};

  h2 {
    display: flex;
  }
  span {
    font-size: ${theme.sizes.s2};
    height: 30px;
    width: 30px;
    border-radius: 50%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${theme.sizes.s3};
  }
  svg {
    width: 1.7em;
    height: 1.7em;
  }
`
