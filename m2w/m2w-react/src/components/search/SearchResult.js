import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import SearchTitleList from "../helpers/SearchTitleList";

const SearchResult = () => {
    const [titles, setTitles] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const getTitleRequest = async () => {

        const url = 'https://imdb-api.com/en/API/SearchTitle/k_8v24mym4/game';

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setTitles(responseJson.results)

    }

    useEffect(() => {
        getTitleRequest();
    }, []);

    return (
        <Container id="search-container" fluid>
            <Row className="px-5">
                <SearchTitleList titles={titles} />
            </Row>
        </Container>
    );
};

export default SearchResult