function UserList(props) {
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {props.users.map(user => (
                    <li key={user.netid} onClick={() => props.onUserClick(user.netid)}>
                        <strong>{user.Name}</strong> ({user.netid}) - {user.address}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
