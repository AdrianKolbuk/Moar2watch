import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import CategoryTitleCards from "../helpers/CategoryTitleCards";

const DocumentaryTitleList = () => {
    const [titles, setTitles] = useState([]);

    const getTitleRequest = async () => {

        const pathname = window.location.pathname;
        const url = "https://imdb-api.com/API/AdvancedSearch/k_8v24mym4?title_type=feature,tv_movie,documentary&genres=documentary&count=100";

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
            <span className="listTitleFilms">Documentary movies</span>
            <Row className="px-5 pt-2">
                <CategoryTitleCards titles={titles} />
            </Row>
        </Container>
    );
};

export default DocumentaryTitleList