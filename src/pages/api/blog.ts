import type { NextApiHandler } from 'next'
import axios from "axios"
// import { Post } from "../../features/blog/blogAPI"

const blogHandler: NextApiHandler = async (request, response) => {

  const resp = await axios.get("https://simple-blog-api.crew.red/posts")

  // request.body
  console.log("HANDLER: " + resp)
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  response.json({data: resp})
}

export default blogHandler
