import type { NextApiHandler } from 'next'
import axios from "axios"

const blogGetPosts: NextApiHandler = async (_request, response) => {

  const {data} = await axios.get("https://simple-blog-api.crew.red/posts")

  response.json({data})
}

export default blogGetPosts
