import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts } from './blogSlice'

function Blog() {
  const dispatch = useAppDispatch()
  const getPosts = useAppSelector(selectPosts)
  console.log(getPosts)

  // const posts

  return (
    <div>
      <button onClick={() => dispatch(getPostsAsync())}>Get Posts</button>
      {/* {posts} */}
    </div>
  )
}

export default Blog
