import Dayjs from 'dayjs';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostNotFound from './PostNotFound';

const PostDetails = () => {
  
  const { id } = useParams()
  const [post, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
      const data = await res.json()
      setPosts(data.post)
      setLoading(false)
    }
    fetcher()
  }, [])
  
  if (loading) return <p>読み込み中です...</p>
  if (!post) return <PostNotFound />
  
  const { title, thumbnailUrl, createdAt, categories, content } = post

  return (
    <div className="w-full pt-14 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="pb-4">
          <img src={thumbnailUrl} />
        </div>
        <div className="flex pl-3 pr-6">
          <div className="text-sm opacity-50 flex flex-auto justify-start">
            {Dayjs(createdAt).format("YYYY/M/DD")}
          </div>
          <div className="flex flex-auto justify-end">
            <ul className="flex text-sm">
              {categories.map((elem) => 
              <li key={elem} className="text-sky-700 border-1 py-1 px-1.5 ml-2 rounded-sm">{elem}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="text-2xl pl-3 py-2 mb-2">
            {title}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} className="pl-3 opacity-80" />
      </div>
    </div>
  )
}

export default PostDetails