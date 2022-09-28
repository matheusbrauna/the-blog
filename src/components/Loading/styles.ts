import styled from 'styled-components'

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  svg {
    animation: spin 0.5s linear infinite;
    color: ${({ theme }) => theme.colors.purple7};
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
