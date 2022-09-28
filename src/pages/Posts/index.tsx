import { Loading } from '../../components/Loading'
import { useGetPostsQuery } from '../../graphql/generated'
import { Container, ImageContainer, PostsContainer } from './styles'

export function Posts() {
  const { data } = useGetPostsQuery()

  return (
    <Container>
      {!data && <Loading />}
      {data?.posts.map((posts) => (
        <PostsContainer key={posts.id} to={`/posts/${posts.slug}`}>
          <ImageContainer>
            <img src={posts.banner?.url} alt={posts.title} />
          </ImageContainer>
          <span>
            {new Intl.DateTimeFormat('pt-BR').format(new Date(posts.createdAt))}
          </span>
          <h2>{posts.title}</h2>
        </PostsContainer>
      ))}
    </Container>
  )
}
