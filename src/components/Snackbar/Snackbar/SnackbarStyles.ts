import styled from 'styled-components'
import { theme } from '../../../theme'

export const StyledSnackbar = styled.div`
  position: fixed;
  bottom: 10%;
  left: 50%;
  width: 90vw;
  max-width: 500px;
  transform: translateX(-50%);
  z-index: 999;
  padding: ${theme.sizes.s3};
  background-color: ${theme.colors.error};
  border-radius: 4px;
  box-shadow: ${theme.shadow};
  color: ${theme.colors.white};
  font-weight: 500;
`
