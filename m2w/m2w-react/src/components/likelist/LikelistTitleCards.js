import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { deleteTitleLikeApiCall } from '../../apiCalls/titlelikeApiCalls';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { addTitleWatchlistApiCall, deleteTitleWatchlistApiCall } from '../../apiCalls/titleWatchlistApiCalls';
import { isAuthenticated } from '../../helpers/authHelper'


function LikelistTitleCards(props) {
    const user = props.userData

    var arrayWatchTitleIds = []
    user.titleWatchlists.forEach(function (item) {
        arrayWatchTitleIds.push(item.title_id);
    });

    const submitDeleteLike = (id) => {
        deleteTitleLikeApiCall(id).then(() => window.location.reload())
    };

    const submitDeleteWatch = (titleId) => {
        //narazie title to przechwycony title_id filmu z listy lików, który chcielibyśmy usunąć również z listy watch
        //trzeba przechwycić id filmu z listy watch, który ma taki sam title_id jak nasz przechwycony title_id
        var foundId
        user.titleWatchlists.forEach(function (item) {
            if (item.title_id === titleId) {
                foundId = item._id
            }
        });

        deleteTitleWatchlistApiCall(foundId).then(() => window.location.reload())
    };

    const submitAddWatch = (title) => {
        const newTitle = {
            title_id: title.title_id,
            titleName: title.titleName,
            year: title.year,
            image: title.image,
            user_id: title.user_id,
            rating: title.rating
        };
        addTitleWatchlistApiCall(newTitle).then(() => window.location.reload())
    };

    return (
        <React.Fragment>
            {user.titleLikes.map((title, index) => (
                <Col xs={12} sm={6} md={4} xl={2} className="d-flex justify-content-center my-3">
                    <Card style={{ width: '12rem', backgroundColor: '#1c2222', color: 'white' }} key={title.id}>
                        <Card.Img variant="top" src={title.image} alt="title" />
                        <Card.Body>
                            <Card.Title className="my-0" style={{ fontSize: '17px' }}>{title.titleName}</Card.Title>
                            <Card.Text style={{ fontSize: 'medium' }} className="my-0">
                                ({title.year}) &nbsp;{title.rating}/10
                            </Card.Text>
                            <div className="mt-2">
                                {
                                    arrayWatchTitleIds.indexOf(title.title_id) !== -1 &&
                                    <Button variant="outline-secondary" className="py-1" onClick={() => submitDeleteWatch(title.title_id)} style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>Delete from watchlist <VisibilityOffIcon /></Button>
                                }
                                {
                                    arrayWatchTitleIds.indexOf(title.title_id) === -1 &&
                                    <Button variant="outline-secondary" className="py-1" onClick={() => submitAddWatch(title)} style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>Add to watchlist <VisibilityIcon /></Button>
                                }
                                <Button variant="outline-secondary" className="py-1" onClick={() => submitDeleteLike(title._id)} style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>Unlike <ThumbDownAltOutlinedIcon /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            }

        </React.Fragment >
    );
}

export default LikelistTitleCards;