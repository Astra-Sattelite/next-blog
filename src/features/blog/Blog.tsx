import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts } from './blogSlice'
import Link from "next/link"
import * as Styled from "../../styles/Blog"
import { useEffect } from 'react'

const Blog = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {dispatch(getPostsAsync())}, [])

  const posts = useAppSelector(selectPosts)

  return (
    <Styled.Container>
      <Link href="/posts/new">Make New Post</Link>
      {posts.map(post =>
        <Link href={`/posts/${encodeURIComponent(post.id)}`} key={post.id}>
          <Styled.Post>
            <Styled.Title>{post.title}</Styled.Title>
            <Styled.Body>{post.body}</Styled.Body>
          </Styled.Post>
        </Link>
      )}
    </Styled.Container>
  )
}

// export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const dispatch = useAppDispatch()
  // const res = await fetch('https://localhost:3000/posts')
  // const getPosts = dispatch(getPostsAsync())

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }


export default Blog
