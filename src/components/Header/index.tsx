import { Link, NavLink } from 'react-router-dom'
import { Container, Navigation } from './styles'

export function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="Logo The blog" />

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