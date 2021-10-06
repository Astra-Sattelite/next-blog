import type { NextApiHandler } from 'next'
import axios from "axios"
// import { Post } from "../../features/blog/blogAPI"

const blogHandler: NextApiHandler = async (request, response) => {

  const {data} = await axios.get("https://simple-blog-api.crew.red/posts")

  response.json({data})
}

export default blogHandler
