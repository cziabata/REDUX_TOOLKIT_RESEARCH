import { IPost } from "../models/IPost";
import { FC } from "react";

interface PostItemProps {
    post: IPost
}
const PostItem: FC<PostItemProps> = ({post}) => {
    return(
        <div>
            {post.id}
            {post.title}
            <button>Delete</button>
        </div>
    )
}
export default PostItem;