


function ReplyList(props) {
    return (
        <div>
            <h2>Replies to {props.postTitle}</h2>
            <ul>
                {props.replies.map(reply => (
                    <li key={reply.replyid}>
                        <strong>Reply by {reply.netid}</strong><br/>
                        {reply.replycontent}<br/>
                        <small>{reply.replydate}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReplyList;