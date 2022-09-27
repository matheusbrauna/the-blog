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
    a {
      font-size: 1.125rem;
      font-weight: 700;

      &.active {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`
