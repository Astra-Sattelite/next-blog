import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState, AppThunk } from '../../app/store'
import { axiosPosts } from './blogAPI'
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
  'blog/axiosPosts',
  async () => {
    const response = await axiosPosts()

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
  },
})

export default blogSlice.reducer
