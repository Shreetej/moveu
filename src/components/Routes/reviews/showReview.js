import React from 'react'
import { Card} from 'react-bootstrap'

const showReview = (props) => {
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>{props.review.name}</Card.Title>
                <Card.Subtitle>{props.review.designation}</Card.Subtitle>
                <Card.Text>{props.review.review}</Card.Text>
                <Card.Footer><p>{props.review.dateOfPost}</p></Card.Footer>
            </Card.Body>
        </Card>
    </div>
  )
}

export default showReview;