import { FiArrowLeft } from 'react-icons/fi'
import { NavLink, useParams } from 'react-router-dom'
import { Loading } from '../../../components/Loading'
import { useGetPostQuery } from '../../../graphql/generated'
import { ImageContainer, PostContainer } from '../styles'

export function Post() {
  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetPostQuery({
    variables: {
      slug,
    },
  })

  return (
    <PostContainer>
      {!data && <Loading />}
      <NavLink to="/posts">
        <FiArrowLeft size={48} />
      </NavLink>

      <ImageContainer>
        <img src={data?.post?.banner?.url} alt={data?.post?.title} />
      </ImageContainer>
      <h2>{data?.post?.title}</h2>
      <pre>{data?.post?.content}</pre>

      <span>{data?.post?.author?.name}</span>
    </PostContainer>
  )
}
