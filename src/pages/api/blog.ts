import type { NextApiHandler } from 'next'
// import { Post } from "../../features/blog/blogAPI"

const blogHandler: NextApiHandler = async (request, response) => {
  const {data} = request.body

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  response.json({ data: data })
}

export default blogHandler
