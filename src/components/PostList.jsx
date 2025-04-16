import { useState, useEffect } from 'react'
import PostBox from './PostBox'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
      setLoading(false)
    }

    fetcher()
  }, [])

  return (
    <>
      { loading ? <p>読み込み中です...</p> : 
        posts.map((post) => <PostBox key={post.id} post={post} />)
      }
    </>     
  )
}

export default PostList