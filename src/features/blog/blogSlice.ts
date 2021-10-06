import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store'
import { axiosPosts, axiosCreatePost } from './blogAPI'
import { Post } from "./blogAPI"

export interface PostsState {
  posts: Post[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PostsState = {
  posts: [{id: 999, title: "test", body: "testbody"}],
  status: 'idle',
}


export const getPostsAsync = createAsyncThunk(
  'blog/axiosGetPosts',
  async () => {
    const response = await axiosPosts()

    return response.data
  }
)

export const createPostAsync = createAsyncThunk(
  'blog/axiosCreatePost',
  async (val: {title: string, body: string}) => {
    const response = await axiosCreatePost(val)

    return response.data
  }
)

export const selectPosts = (state: AppState) => state.blog.posts

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.posts = action.payload
      })
      .addCase(createPostAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.posts = action.payload
      })
  },
})

export default blogSlice.reducer
