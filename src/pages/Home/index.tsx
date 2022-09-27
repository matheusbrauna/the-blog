import { Container, ImageContainer, TextGroupContainer } from './styles'
import { FiArrowRight } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <TextGroupContainer>
        <h1>
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique placerat hac.
        </p>

        <a href="/posts">
          Veja mais <FiArrowRight size={24} />
        </a>
      </TextGroupContainer>

      <ImageContainer>
        <img src="./teste.png" alt="" />
      </ImageContainer>
    </Container>
  )
}
