import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 2rem;
`

export const TextGroupContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    white-space: nowrap;
    max-width: 480px;
    overflow: hidden; /* "overflow" value must be different from "visible" */

    text-overflow: ellipsis;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.green11};
      transform: translateX(0);
      transition: transform 0.1s;
    }

    &:hover {
      svg {
        transform: translateX(8px);
      }
    }
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  border-radius: 6px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 0px 8px 4px rgba(121, 56, 178, 0.5);
`
