// const res = await axios.get("https://simple-blog-api.crew.red/posts")
import axios from "axios"

export interface Post {
  id: number
  title: string
  body: string
}

export async function axiosPosts(): Promise<{ data: Post[] }> {
  const response = await axios.get('/api/counter')

  return response
}
