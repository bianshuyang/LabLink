
function PostList(props) {
    return (
        <div>
            <h2>Posts by {props.userName}</h2>
            <ul>
                {props.posts.map(post => (
                    <li key={post.postid} onClick={() => props.onPostClick(post.postid)}>
                        <strong>{post.posttitle}</strong><br/>
                        {post.postcontent}<br/>
                        <small>{post.postdate}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default PostList;