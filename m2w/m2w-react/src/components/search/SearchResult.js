import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import CategoryTitleCards from "../helpers/CategoryTitleCards";

const SearchResult = () => {
    const [titles, setTitles] = useState([]);

    const getTitleRequest = async () => {
        const currentUrl = window.location.href
        const currentUrlSplited = currentUrl.split('=');
        const searchValue = currentUrlSplited[1];

        const url = `https://imdb-api.com/en/API/SearchTitle/k_8v24mym4/${searchValue}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        if (responseJson.errorMessage !== "") {

        }
        setTitles(responseJson.results)

    }

    useEffect(() => {
        getTitleRequest();
    }, []);

    return (
        <Container id="search-container" fluid>
            <Row className="px-5">
                <CategoryTitleCards titles={titles} />
            </Row>
        </Container>
    );
};

export default SearchResult