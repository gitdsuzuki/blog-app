import { posts } from '../data/posts'
import PostBox from './PostBox'

const PostList = () => {

  return (
    <>
      {posts.map((post) => <PostBox key={post.id} post={post} />)}
    </>     
  )
}

export default PostList