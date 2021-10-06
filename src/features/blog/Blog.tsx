import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts, createPostAsync } from './blogSlice'
import styled from "styled-components"

const Blog = () => {

  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  const StyledElem = styled.div`
    background-color: red;
    color: red;
  `

  return (
    <div>
      <button onClick={() => dispatch(createPostAsync({title: "create req test", body: "create req body test"}))}>Create Post</button>
      <button onClick={() => dispatch(getPostsAsync())}>Get Posts</button>
      {posts.map(x =>
        <StyledElem key={x.id}>{x.title}</StyledElem>
      )}
    </div>
  )
}

export default Blog
