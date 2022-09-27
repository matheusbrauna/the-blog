import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`

export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;

  li {
    font-size: 1.125rem;
    font-weight: 700;

    a {
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`
