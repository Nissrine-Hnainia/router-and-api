import React from 'react';
import UserList from "../Components/UserList"

const Home = ({users, load}) => {
    return (
        <div className="home">
            <h1>Welcome to our home page</h1>
            <UserList users={users} load={load}/>
        </div>
    )
}

export default Home
