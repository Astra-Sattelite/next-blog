import type { NextPage } from 'next'

import Counter from '../features/counter/Counter'
import Blog from "../features/blog/Blog"
// import Blog from '../features/blog/Blog'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Blog />
    </div>
  )
}

export default IndexPage
