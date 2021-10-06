import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Post = styled.div`
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
export const Title = styled.div`
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

export const Body = styled.div`
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 80%;
  height: 250px;
  font-size: 1rem;
  overflow: hidden;
`

export const PostBig = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  min-height: 500px;
  width: 50%;
  height: 90%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
`

export const TitleBig = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 50px;
  font-size: 1.3rem;
  border-bottom: 1px solid black;
  overflow: scroll;
`

export const BodyBig = styled.div`
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 80%;
  height: 250px;
  font-size: 1rem;
  overflow: hidden;
`
