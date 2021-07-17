import React from 'react';
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom"


const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem', marginBottom:"30px" }}>
            <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png" />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                {user.email}
                </Card.Text>
                <Button variant="primary"><Link to={`/users/${user.id}`} style={{color:"white", textDecoration:"none"}}>details</Link></Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard
