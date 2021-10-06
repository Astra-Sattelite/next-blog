import type { NextApiHandler } from 'next'
import axios from "axios"
// import { Post } from "../../features/blog/blogAPI"

const blogHandler: NextApiHandler = async (request, response) => {

  const data = axios.get("https://simple-blog-api.crew.red/posts")  

  // request.body
  console.log("HANDLER: " + data)
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  // response.json({ data: data })
  response.json({data: data})
}

export default blogHandler
