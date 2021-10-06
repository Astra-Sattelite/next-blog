import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts } from './blogSlice'

function Blog() {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  return (
    <div>
      <button onClick={() => dispatch(getPostsAsync())}>Get Posts</button>
      {posts.map(x => 
        <div key={x.id}>{x.title}</div>
      )}
    </div>
  )
}

export default Blog
