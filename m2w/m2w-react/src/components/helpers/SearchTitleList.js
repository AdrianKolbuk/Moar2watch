import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Col } from 'react-bootstrap'

const SearchTitleList = (props) => {
    return (
        <>
            {props.titles.map((title, index) => (
                <Col xs={6} sm={6} md={4} xl={1} className="d-flex justify-content-center my-3">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={title.image} alt="title" />
                        <Card.Body>
                            <Card.Title>{title.title}</Card.Title>
                            <Card.Text>
                                {title.description}
                            </Card.Text>
                            <Button variant="primary">Like</Button>
                            <Button variant="primary">Watchlist</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </>
    );
}

export default SearchTitleList;