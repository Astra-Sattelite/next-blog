import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getPostsAsync, selectPosts } from "./blogSlice";
import Link from "next/link";
import * as Styled from "../../styles/Blog";
import React, { useEffect } from "react";

const Blog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  const posts = useAppSelector(selectPosts);

  return (
    <Styled.Container>
      <Link href="/posts/new">Make New Post</Link>
      {posts.map((post) => (
        <Link href={`/posts/${encodeURIComponent(post.id)}`} key={post.id}>
          <Styled.Post>
            <Styled.Title>{post.title}</Styled.Title>
            <Styled.Body>{post.body}</Styled.Body>
          </Styled.Post>
        </Link>
      ))}
    </Styled.Container>
  );
};

export default Blog;
