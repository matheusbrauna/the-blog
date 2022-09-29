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
  border-radius: 6px;
  overflow: hidden;

  span {
    display: inline-block;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const PostContainer = styled.article`
  width: 100%;

  span {
    display: block;
    margin-top: 1.5rem;
    text-align: right;
  }

  h2 {
    font-size: 3rem;
    margin-top: 1.5rem;
  }

  pre {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.mauve12};
    font-family: 'Roboto';
    margin-top: 2rem;
    white-space: pre-wrap;
  }
`

export const ImageContainer = styled.div`
  margin-top: 1.5rem;
  flex: 1;
  border-radius: 6px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`
