import type { NextApiHandler } from 'next'
import axios from "axios"

const blogCreatePost: NextApiHandler = async (request, response) => {
  const val = request.body
  const {data} = await axios.post("https://simple-blog-api.crew.red/posts", val)

  response.json({data})
}

export default blogCreatePost
