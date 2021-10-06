import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts, createPostAsync } from './blogSlice'

const Blog = () => {

  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  return (
    <div>
      <button onClick={() => dispatch(createPostAsync({title: "create req test", body: "create req body test"}))}>Create Post</button>
      <button onClick={() => dispatch(getPostsAsync())}>Get Posts</button>
      {posts.map(x =>
        <div key={x.id}>{x.title}</div>
      )}
    </div>
  )
}

export default Blog
