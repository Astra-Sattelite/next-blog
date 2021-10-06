import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeTitle, changeBody, getPostsAsync } from '../../features/blog/blogSlice'
import Link from "next/link"
import React from 'react'
import { axiosCreatePost } from '../../features/blog/blogAPI'

export const New = () => {

  const dispatch = useAppDispatch()

  const {postTitle, postBody} = useAppSelector(state => state.blog)

  return (
    <div>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeTitle(e.target.value))} type="text" placeholder="Enter title for your post"/>

      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeBody(e.target.value))} type="text" placeholder="Enter body for your post"/>

      <Link href="/">
        <button 
          onClick={() => 
            axiosCreatePost({title: postTitle, body: postBody})
              .then(() => dispatch(getPostsAsync()))
          }
        >
          Create Post
        </button>
      </Link>
    </div>
  )
}

export default New