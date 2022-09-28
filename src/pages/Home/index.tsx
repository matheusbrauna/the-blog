import { Container, ImageContainer, TextGroupContainer } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useGetHighlightPostQuery } from '../../graphql/generated'
import { Loading } from '../../components/Loading'

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

            <a href="/posts">
              Veja mais <FiArrowRight size={24} />
            </a>
          </TextGroupContainer>

          <ImageContainer>
            <img src={post.banner?.url} alt="" />
          </ImageContainer>
        </>
      ))}
    </Container>
  )
}
