import { postAPI } from "../services/PostService";
import PostItem from "../components/PostItem";

const PostContainer = () => {
    const{data: posts} = postAPI.useFetchAllPostsQuery(5)
    return(
        <div>
            {posts && posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}
export default PostContainer;