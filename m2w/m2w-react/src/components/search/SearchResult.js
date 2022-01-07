import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import CategoryTitleCards from "../helpers/CategoryTitleCards";
import { getCurrentUser, isAuthenticated } from '../../helpers/authHelper'
import { getUserByIdApiCall } from '../../apiCalls/userApiCalls'

const SearchResult = () => {
    const [titles, setTitles] = useState([]);
    const [expression, setExpression] = useState([]);

    const getTitleRequest = async () => {
        const currentUrl = window.location.href
        const currentUrlSplited = currentUrl.split('=');
        const searchValue = currentUrlSplited[1];
        const tmp = "%2B"
        let url
        if (searchValue.indexOf(tmp) !== -1) {
            url = `https://imdb-api.com/en/API/SearchTitle/k_8v24mym4/`;
        } else {
            url = `https://imdb-api.com/en/API/SearchTitle/k_8v24mym4/${searchValue}`;
        }

        const response = await fetch(url);
        const responseJson = await response.json();

        setTitles(responseJson.results)
        setExpression(responseJson.expression)
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

    const searchReturn = (titles === null || titles.length === 0) ?
        <div className="d-flex justify-content-center pt-5"><span style={{ color: "white", fontSize: "x-large" }}>Sorry, we did not found what you were looking for</span></div> :
        <CategoryTitleCards titles={titles} titleLikeIds={titleLikeIds} titleWatchIds={titleWatchIds} titleLikes={titleLikes} titleWatches={titleWatches} />

    return (
        <Container id="search-container" fluid>
            <Row className="px-5">
                <div className="d-flex justify-content-start pt-2 mx-2"><span style={{ color: "white", fontSize: "large" }}>Search result for: '{expression}'</span></div>
                {searchReturn}
            </Row>
        </Container>
    );
};

export default SearchResult