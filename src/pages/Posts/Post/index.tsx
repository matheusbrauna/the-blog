import { useParams } from 'react-router-dom'
import { Loading } from '../../../components/Loading'
import { useGetPostQuery } from '../../../graphql/generated'
import { PostContainer } from '../styles'

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
      <h2>{data?.post?.title}</h2>
      <pre>{data?.post?.content}</pre>
    </PostContainer>
  )
}
