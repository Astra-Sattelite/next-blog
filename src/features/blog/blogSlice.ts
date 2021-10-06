import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store'
import { axiosPosts, axiosCreatePost } from './blogAPI'
import { Post } from "./blogAPI"
import * as R from "ramda"

export interface PostsState {
  posts: Post[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
}


export const getPostsAsync = createAsyncThunk(
  'blog/axiosGetPosts',
  async () => {
    const response = await axiosPosts()

    return R.reverse(response.data)
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
