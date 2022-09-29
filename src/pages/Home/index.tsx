import { Container, ImageContainer, TextGroupContainer } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useGetHighlightPostQuery } from '../../graphql/generated'
import { Loading } from '../../components/Loading'
import { NavLink } from 'react-router-dom'

export function Home() {
  const { data } = useGetHighlightPostQuery()

  return (
    <Container>
      {!data && <Loading />}
      {data?.posts.map((post) => (
        <>
          <TextGroupContainer key={post.id}>
            <h1>{post.title}</h1>

            <p>{post.content}</p>

            <NavLink to="/posts">
              Veja mais <FiArrowRight size={24} />
            </NavLink>
          </TextGroupContainer>

          <ImageContainer>
            <img src={post.banner?.url} alt="" />
          </ImageContainer>
        </>
      ))}
    </Container>
  )
}
