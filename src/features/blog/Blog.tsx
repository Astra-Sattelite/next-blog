import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getPostsAsync, selectPosts, createPostAsync } from './blogSlice'
import styled from "styled-components"

const Blog = () => {

  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts)

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `

  const Post = styled.div`
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
  `
  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 1.3rem;
    border-bottom: 1px solid black;
    overflow: scroll;
  `

  const Body = styled.div`
    justify-self: center;
    align-self: center;
    text-align: center;
    width: 80%;
    height: 250px;
    font-size: 1rem;
    overflow: hidden;
  `

  return (
    <Container>
      <button onClick={() => dispatch(createPostAsync({title: "create req test", body: "create req body test"}))}>Create Post</button>
      <button onClick={() => dispatch(getPostsAsync())}>Get Posts</button>
      {posts.map(x =>
        <Post key={x.id}>
          <Title>{x.title}</Title>
          <Body>{x.body}</Body>
        </Post>
      )}
    </Container>
  )
}

export default Blog
