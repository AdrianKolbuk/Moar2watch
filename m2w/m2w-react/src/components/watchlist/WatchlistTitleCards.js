import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col } from 'react-bootstrap'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { deleteTitleWatchlistApiCall } from '../../apiCalls/titleWatchlistApiCalls';
import { addTitleLikeApiCall, deleteTitleLikeApiCall } from '../../apiCalls/titlelikeApiCalls';
import { isAuthenticated } from '../../helpers/authHelper'

function WatchlistTitleCards(props) {
    const user = props.userData

    var arrayLikeTitleIds = []
    user.titleLikes.forEach(function (item) {
        arrayLikeTitleIds.push(item.title_id);
    });

    const submitDeleteWatch = (id) => {
        deleteTitleWatchlistApiCall(id).then(() => window.location.reload())
    };

    const submitDeleteLike = (titleId) => {
        //narazie title to przechwycony title_id filmu z listy lików, który chcielibyśmy usunąć również z listy watch
        //trzeba przechwycić id filmu z listy watch, który ma taki sam title_id jak nasz przechwycony title_id
        var foundId
        user.titleLikes.forEach(function (item) {
            if (item.title_id === titleId) {
                foundId = item._id
            }
        });

        deleteTitleLikeApiCall(foundId).then(() => window.location.reload())
    };

    const submitAddLike = (title) => {
        const newTitle = {
            title_id: title.title_id,
            titleName: title.titleName,
            year: title.year,
            image: title.image,
            user_id: title.user_id,
            rating: title.rating
        };
        addTitleLikeApiCall(newTitle).then(() => window.location.reload())
    };


    return (
        <React.Fragment>
            {user.titleWatchlists.map((title, index) => (
                <Col xs={12} sm={6} md={4} xl={2} className="d-flex justify-content-center my-3">
                    <Card style={{ width: '12rem', backgroundColor: '#1c2222', color: 'white' }} key={title.id}>
                        <Card.Img variant="top" src={title.image} alt="title" />
                        <Card.Body>
                            <Card.Title className="my-0" style={{ fontSize: '17px' }}>{title.titleName}</Card.Title>
                            <Card.Text style={{ fontSize: 'medium' }} className="my-0">
                                ({title.year}) &nbsp;{title.rating}/10
                            </Card.Text>
                            <div className="mt-2">
                                <Button variant="outline-secondary" className="py-1" onClick={() => submitDeleteWatch(title._id)} style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>Delete from watchlist <VisibilityOffIcon /></Button>
                                {
                                    arrayLikeTitleIds.indexOf(title.title_id) !== -1 &&
                                    <Button
                                        variant="outline-secondary"
                                        className="py-1"
                                        onClick={() => submitDeleteLike(title.title_id)}
                                        style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>
                                        Unlike <ThumbDownAltOutlinedIcon />
                                    </Button>
                                }
                                {
                                    arrayLikeTitleIds.indexOf(title.title_id) === -1 &&
                                    <Button
                                        variant="outline-secondary"
                                        className="py-1"
                                        onClick={() => submitAddLike(title)}
                                        style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>
                                        Like <ThumbUpAltOutlinedIcon />
                                    </Button>
                                }
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </React.Fragment>
    );
}

export default WatchlistTitleCards;