import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

function WatchlistTitleCards(props) {
    const user = props.userData
    return (
        <React.Fragment>
            {user.titleWatchlists.map((title, index) => (
                <Col xs={12} sm={6} md={4} xl={2} className="d-flex justify-content-center my-3">
                    <Card style={{ width: '12rem', backgroundColor: '#1c2222', color: 'white' }}>
                        <Card.Img variant="top" src={title.image} alt="title" />
                        <Card.Body>
                            <Card.Title className="my-0" style={{ fontSize: '17px' }}>{title.titleName}</Card.Title>
                            <Card.Text style={{ fontSize: 'medium' }} className="my-0">
                                {title.year}
                            </Card.Text>
                            <div className="mt-2">
                                <Button variant="outline-secondary" className="py-1" style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>Add to watchlist <VisibilityIcon /></Button>
                                <Button variant="outline-secondary" className="py-1" style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>Like <ThumbUpAltOutlinedIcon /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </React.Fragment>
    );
}

export default WatchlistTitleCards;