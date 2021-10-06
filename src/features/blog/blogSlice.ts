import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState, AppThunk } from '../../app/store'
import { axiosPosts } from './blogAPI'
import { Post } from "./blogAPI"

export interface PostsState {
  posts: Post[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
}


export const getPostsAsync = createAsyncThunk(
  'blog/axiosPosts',
  async () => {
    const response = await axiosPosts()
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const selectPosts = (state: AppState) => state.blog.posts

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
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