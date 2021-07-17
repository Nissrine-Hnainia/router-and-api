import React from 'react';
import {Card, ListGroup, ListGroupItem, Spinner} from "react-bootstrap"


const SingleUser = ({user, loading}) => {
    return (
        <div>
            {loading ? <Spinner animation="border" /> :
            (<Card style={{ width: '18rem', margin:"40px auto" }}>
            <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png" />
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                Address: {user.address.city}, { user.address.street}, { user.address.zipcode}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{user.phone}</ListGroupItem>
                <ListGroupItem>{user.company.name}, {user.company.bs}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{user.website}</Card.Link>
                <Card.Link href="#">{user.email}</Card.Link>
            </Card.Body>
        </Card>)}
        </div>
    )
}

export default SingleUser
