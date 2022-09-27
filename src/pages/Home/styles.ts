import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const TextGroupContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors['brand-mid']};
  }

  p {
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors['brand-mid']};

    svg {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`

export const ImageContainer = styled.div`
  flex: 1;
`
