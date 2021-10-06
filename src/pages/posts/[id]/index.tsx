import { useRouter } from "next/router";
import * as Styled from "../../../styles/Blog";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { getPostsAsync, selectPosts } from "../../../features/blog/blogSlice";
import Link from "next/link";
import * as R from "ramda";
import React, { useEffect } from "react";

const BigPost = () => {
  const router = useRouter();

  const { id } = router.query;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  const posts = useAppSelector(selectPosts);

  const post = R.find((x) => x.id === parseInt(id as string), posts);

  if (!post) {
    return <div></div>;
  }

  return (
    <Styled.Container>
      <Styled.PostBig>
        <Styled.TitleBig>{post.title}</Styled.TitleBig>
        <Styled.BodyBig>{post.body}</Styled.BodyBig>
      </Styled.PostBig>
      <Link href="/">
        <button>back</button>
      </Link>
    </Styled.Container>
  );
};

export default BigPost;
