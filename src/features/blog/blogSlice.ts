import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../../app/store";
import { axiosPosts } from "./blogAPI";
import { Post } from "./blogAPI";
import * as R from "ramda";

export interface PostsState {
  posts: Post[];
  postTitle: string;
  postBody: string;
  status: "idle" | "loading" | "failed";
}

const initialState: PostsState = {
  posts: [],
  postTitle: "",
  postBody: "",
  status: "idle",
};

export const getPostsAsync = createAsyncThunk(
  "blog/axiosGetPosts",
  async () => {
    const response = await axiosPosts();

    return R.reverse(response.data);
  }
);

export const selectPosts = (state: AppState) => state.blog.posts;

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.postTitle = action.payload;
    },
    changeBody: (state, action: PayloadAction<string>) => {
      state.postBody = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      });
  },
});

export const { changeTitle, changeBody } = blogSlice.actions;

export default blogSlice.reducer;
