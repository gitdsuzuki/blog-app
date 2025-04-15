import { posts } from '../data/posts'
import PostBox from './PostBox'

const PostList = () => {

    return (
        <>
            {posts.map((post) => 
                <PostBox 
                    title={post.title}
                    createdAt={post.createdAt}
                    categories={post.categories}
                    content={post.content} 
                />)}
        </>     
    )
}

export default PostList