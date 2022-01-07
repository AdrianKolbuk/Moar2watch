import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Row } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { getCurrentUser, isAuthenticated } from '../../helpers/authHelper'
import { addTitleLikeApiCall, deleteTitleLikeApiCall } from "../../apiCalls/titlelikeApiCalls";
import { addTitleWatchlistApiCall, deleteTitleWatchlistApiCall } from '../../apiCalls/titleWatchlistApiCalls';
import { useRouteMatch } from 'react-router-dom'


const TitleList = (props) => {

    const { path } = useRouteMatch();

    const submitDeleteLike = (titleId) => {
        var foundId
        props.titleLikes.forEach(function (item) {
            if (item.title_id === titleId) {
                foundId = item._id
            }
        });

        deleteTitleLikeApiCall(foundId).then(() => window.location.reload())
    };

    const submitAddLike = (title) => {
        const userid = getCurrentUser().userId
        let titleYear = ""
        if (path === "/award_winners" || path === "/top100s") {
            titleYear = title.description
        } else if (path === "/") {
            titleYear = title.year
        }

        const newTitle = {
            title_id: title.id,
            titleName: title.title,
            year: titleYear,
            image: title.image,
            user_id: userid,
            rating: title.imDbRating
        };
        addTitleLikeApiCall(newTitle).then(() => window.location.reload())
    };

    const submitDeleteWatch = (titleId) => {
        var foundId
        props.titleWatches.forEach(function (item) {
            if (item.title_id === titleId) {
                foundId = item._id
            }
        });

        deleteTitleWatchlistApiCall(foundId).then(() => window.location.reload())
    };

    const submitAddWatch = (title) => {
        const userid = getCurrentUser().userId
        let titleYear = ""
        if (path === "/award_winners") {
            titleYear = title.description
        } else if (path === "/") {
            titleYear = title.year
        }

        const newTitle = {
            title_id: title.id,
            titleName: title.title,
            year: titleYear,
            image: title.image,
            user_id: userid,
            rating: title.imDbRating
        };
        addTitleWatchlistApiCall(newTitle).then(() => window.location.reload())
    };

    return (
        <>
            {props.titles.map((title, index) => (
                <div className='item'>
                    <div className='listItem' key={title.id}>
                        <img className="poster" src={title.image} alt="Poster" />

                        <div className='overlay d-flex align-item-center justify-content-center'>
                            <div >
                                {
                                    !isAuthenticated() && <span className="span-interact">Login to interact</span>
                                }
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
                        </div>
                    </div>

                    <div className='itemInfo'>
                        <Row><span>{title.title}</span></Row>
                        <Row>
                            <span>
                                {(path === "/award_winners" || path === "/top100s") && title.description}
                                {path === "/" && `(` + title.year + `)`}
                                &nbsp; {title.imDbRating !== "" && title.imDbRating + `/10`}
                                {title.imDbRating === "" && '?/10'}
                            </span>
                        </Row>
                    </div>
                </div>

            ))
            }
        </>
    );
}

export default TitleList;