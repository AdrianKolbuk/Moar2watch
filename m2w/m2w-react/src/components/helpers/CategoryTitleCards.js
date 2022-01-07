import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getCurrentUser } from '../../helpers/authHelper'
import { addTitleLikeApiCall, deleteTitleLikeApiCall } from "../../apiCalls/titlelikeApiCalls";
import { addTitleWatchlistApiCall, deleteTitleWatchlistApiCall } from '../../apiCalls/titleWatchlistApiCalls';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { isAuthenticated } from '../../helpers/authHelper'

function CategoryTitleCards(props) {

    var submitDeleteLike
    var submitAddLike
    var submitDeleteWatch
    var submitAddWatch

    if (isAuthenticated()) {
        submitDeleteLike = (titleId) => {
            var foundId
            props.titleLikes.forEach(function (item) {
                if (item.title_id === titleId) {
                    foundId = item._id
                }
            });

            deleteTitleLikeApiCall(foundId).then(() => window.location.reload())
        };

        submitAddLike = (title) => {
            const userid = getCurrentUser().userId
            const newTitle = {
                title_id: title.id,
                titleName: title.title,
                year: title.description,
                image: title.image,
                user_id: userid,
                rating: title.imDbRating
            };
            addTitleLikeApiCall(newTitle).then(() => window.location.reload())
        };

        submitDeleteWatch = (titleId) => {
            var foundId
            props.titleWatches.forEach(function (item) {
                if (item.title_id === titleId) {
                    foundId = item._id
                }
            });

            deleteTitleWatchlistApiCall(foundId).then(() => window.location.reload())
        };

        submitAddWatch = (title) => {
            const userid = getCurrentUser().userId
            const newTitle = {
                title_id: title.id,
                titleName: title.title,
                year: title.description,
                image: title.image,
                user_id: userid,
                rating: title.imDbRating
            };
            addTitleWatchlistApiCall(newTitle).then(() => window.location.reload())
        };
    }

    return (
        <>
            {props.titles.map((title, index) => (
                <Col xs={12} sm={6} md={4} xl={2} className="d-flex justify-content-center my-3">
                    <Card style={{ width: '12rem', backgroundColor: '#1c2222', color: 'white' }} key={title.id}>
                        <Card.Img variant="top" src={title.image} alt="title" />
                        <Card.Body>
                            <Card.Title className="my-0" style={{ fontSize: '17px' }}>{title.title}</Card.Title>
                            <Card.Text style={{ fontSize: 'medium' }} className="my-0">
                                {title.description}&nbsp; {title.imDbRating}/10
                            </Card.Text>
                            <div className="mt-2">
                                {
                                    isAuthenticated() && (
                                        props.titleWatchIds.indexOf(title.id) !== -1 &&
                                        <Button
                                            variant="outline-secondary"
                                            className="py-1"
                                            onClick={() => submitDeleteWatch(title.id)}
                                            style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>
                                            Delete from watchlist <VisibilityOffIcon />
                                        </Button>
                                    )
                                }
                                {
                                    isAuthenticated() && (
                                        props.titleWatchIds.indexOf(title.id) === -1 &&
                                        <Button
                                            variant="outline-secondary"
                                            className="py-1"
                                            onClick={() => submitAddWatch(title)}
                                            style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>
                                            Add to watchlist <VisibilityIcon />
                                        </Button>
                                    )
                                }
                                {
                                    isAuthenticated() && (
                                        props.titleLikeIds.indexOf(title.id) !== -1 &&
                                        <Button
                                            variant="outline-secondary"
                                            className="py-1"
                                            onClick={() => submitDeleteLike(title.id)}
                                            style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>
                                            Unlike <ThumbDownAltOutlinedIcon />
                                        </Button>
                                    )
                                }
                                {
                                    isAuthenticated() && (
                                        props.titleLikeIds.indexOf(title.id) === -1 &&
                                        <Button
                                            variant="outline-secondary"
                                            className="py-1"
                                            onClick={() => submitAddLike(title)}
                                            style={{ fontSize: 'small', width: '100%', color: "#E8E8E8" }}>
                                            Like <ThumbUpAltOutlinedIcon />
                                        </Button>
                                    )
                                }

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </>
    );
}

export default CategoryTitleCards;