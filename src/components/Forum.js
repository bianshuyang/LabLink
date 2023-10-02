import React, { useState } from 'react';



// Mock data
const usersData = [
    { netid: 'abc01', Name: 'Alice', address: 'alice@example.com' },
    { netid: 'def02', Name: 'Bob', address: 'bob@example.com' }
];

const postsData = [
    { netid: 'abc01', posttitle: 'Post by Alice', postcontent: 'This is a post by Alice.', postdate: '2023-10-01', postid: 1 },
    { netid: 'def02', posttitle: 'Post by Bob', postcontent: 'This is a post by Bob.', postdate: '2023-10-02', postid: 2 }
];

const repliesData = [
    { netid: 'def02', replycontent: 'Reply by Bob to Alice', replydate: '2023-10-03', replyid: 'uuid-1', postid: 1 },
    { netid: 'abc01', replycontent: 'Reply by Alice to Bob', replydate: '2023-10-04', replyid: 'uuid-2', postid: 2 }
];

function Forum() {
    // State to determine which view to show: users, posts, or replies
    const [view, setView] = useState('users');
    const [selectedNetid, setSelectedNetid] = useState(null);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleUserClick = (netid) => {
        setSelectedNetid(netid);
        setView('posts');
    };

    const handlePostClick = (postid) => {
        setSelectedPostId(postid);
        setView('replies');
    };

    const handleViewChange = (event) => {
        setView(event.target.value);
    };

    // Depending on the state, we'll render different views
    return (
        <>


{/* Dropdown menu to select view */}
            <div>
                <label>Select View: </label>
                <select value={view} onChange={handleViewChange}>
                    <option value="users">Users</option>
                    <option value="posts">Posts</option>
                    <option value="replies">Replies</option>
                </select>
            </div>


            {/* Main Content */}
            <main>
                

                { view === 'posts' && (
                    <div>
                        <h2>Posts by {selectedNetid}</h2>
                        <ul>
                            {postsData.map(user => (
                                <li key={user.netid} onClick={() => handleUserClick(user.netid)}>
                                    <strong>{user.posttitle}</strong> ({user.postcontent}) - {user.postdate}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setView('users')}>Back to Users</button>
                    </div>
                )}

                

                { view === 'users' && (
                    <div>
                        <h2>Users</h2>
                        <ul>
                            {usersData.map(user => (
                                <li key={user.netid} onClick={() => handleUserClick(user.netid)}>
                                    <strong>{user.Name}</strong> ({user.netid}) - {user.address}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </main>
        </>
    );
}

export default Forum;

