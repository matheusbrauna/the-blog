import { Container, PostsContainer } from './styles'

export function Posts() {
  return (
    <Container>
      <PostsContainer to="/posts/1">
        <div>
          <img src="/teste.png" alt="" />
        </div>
        <span>Janeiro 04, 2022</span>
        <h2>10 dicas para conseguir a vaga desejada</h2>
      </PostsContainer>
      <PostsContainer to="/posts/1">
        <div>
          <img src="/teste.png" alt="" />
        </div>
        <span>Janeiro 04, 2022</span>
        <h2>10 dicas para conseguir a vaga desejada</h2>
      </PostsContainer>

      <PostsContainer to="/posts/1">
        <div>
          <img src="/teste.png" alt="" />
        </div>
        <span>Janeiro 04, 2022</span>
        <h2>10 dicas para conseguir a vaga desejada</h2>
      </PostsContainer>

      <PostsContainer to="/posts/1">
        <div>
          <img src="/teste.png" alt="" />
        </div>
        <span>Janeiro 04, 2022</span>
        <h2>10 dicas para conseguir a vaga desejada</h2>
      </PostsContainer>
    </Container>
  )
}
