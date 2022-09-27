import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 4rem;
`

export const PostsContainer = styled(NavLink)`
  max-width: 370px;

  span {
    display: inline-block;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['brand-mid']};
    margin: 0.5rem 0;
  }
`

export const PostContainer = styled.article`
  width: 100%;

  span {
    display: block;
    margin-top: 1rem;
    text-align: right;
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors['brand-mid']};
    margin-top: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    margin-top: 2rem;
  }
`
