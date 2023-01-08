import React from 'react'
import { Card} from 'react-bootstrap'

const showPost = (props) => {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{props.post.title}</Card.Title>
                <Card.Subtitle>{props.post.subTitle}</Card.Subtitle>
                <Card.Text>{props.post.content}</Card.Text>
                <Card.Footer><p>{props.post.dateOfPost}</p><p>{props.post.category}</p></Card.Footer>
            </Card.Body>
        </Card>
    </div>
  )
}

export default showPost;