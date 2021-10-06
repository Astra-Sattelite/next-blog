import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function axiosPosts(): Promise<{ data: Post[] }> {
  const { data } = await axios.get("/api/blogGetPosts");

  return data;
}

export async function axiosCreatePost(val: { title: string; body: string }) {
  await axios
    .post("/api/blogCreatePost", val)
    .then(function (responce) {
      console.log(responce);
    })
    .catch(function (error) {
      console.log(error);
    });
}
