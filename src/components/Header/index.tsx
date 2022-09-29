import { NavLink } from 'react-router-dom'
import { Container, Navigation } from './styles'

export function Header() {
  return (
    <Container>
      <NavLink to="/">
        <h1>The Blog</h1>
      </NavLink>

      <nav>
        <Navigation>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
        </Navigation>
      </nav>
    </Container>
  )
}
