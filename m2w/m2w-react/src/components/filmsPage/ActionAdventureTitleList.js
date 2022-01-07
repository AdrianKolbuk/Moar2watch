import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import CategoryTitleCards from "../helpers/CategoryTitleCards";
import { getUserByIdApiCall } from '../../apiCalls/userApiCalls'
import { getCurrentUser } from '../../helpers/authHelper'
import { isAuthenticated } from '../../helpers/authHelper'

const ActionAdventureTitleList = () => {
    const [titles, setTitles] = useState([]);
    const getTitleRequest = async () => {

        const url = "https://imdb-api.com/API/AdvancedSearch/k_8v24mym4?title_type=feature,tv_movie&genres=action,adventure&count=100";

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setTitles(responseJson.results)
    }

    useEffect(() => {
        getTitleRequest();
    }, []);

    const [titleLikeIds, setTitleLikeIds] = useState([]);
    const [titleWatchIds, setTitleWatchIds] = useState([]);
    const [titleLikes, setTitleLikes] = useState([]);
    const [titleWatches, setTitleWatches] = useState([]);
    const gettitleLikeIdsRequest = async () => {
        if (isAuthenticated()) {
            var arrayLikeTitleIds = []
            var arrayWatchTitleIds = []

            const response = await getUserByIdApiCall(getCurrentUser().userId);
            const responseJson = await response.json();

            for (var k in responseJson.titleLikes) {
                arrayLikeTitleIds.push(responseJson.titleLikes[k].title_id);
            }

            for (var m in responseJson.titleWatchlists) {
                arrayWatchTitleIds.push(responseJson.titleWatchlists[m].title_id);
            }

            setTitleLikeIds(arrayLikeTitleIds)
            setTitleWatchIds(arrayWatchTitleIds)
            setTitleLikes(responseJson.titleLikes)
            setTitleWatches(responseJson.titleWatchlists)
        }
    }

    useEffect(() => {
        if (isAuthenticated()) {
            gettitleLikeIdsRequest();
        }
    }, []);

    return (
        <Container id="search-container" fluid>
            <span className="listTitleFilms">Action and adventure movies</span>
            <Row className="px-5 pt-2">
                <CategoryTitleCards titles={titles} titleLikeIds={titleLikeIds} titleWatchIds={titleWatchIds} titleLikes={titleLikes} titleWatches={titleWatches} />
            </Row>
        </Container>
    );
};

export default ActionAdventureTitleList