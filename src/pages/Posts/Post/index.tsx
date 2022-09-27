import { useParams } from 'react-router-dom'
import { PostContainer } from '../styles'

export function Post() {
  const { id } = useParams()

  return (
    <PostContainer>
      <h2>10 dicas para conseguir a vaga desejada</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean.
      </p>
    </PostContainer>
  )
}
