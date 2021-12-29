import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import CategoryTitleCards from "../helpers/CategoryTitleCards";

const ThrillerHorrorTitleList = () => {
    const [titles, setTitles] = useState([]);

    const getTitleRequest = async () => {

        const url = "https://imdb-api.com/API/AdvancedSearch/k_8v24mym4?title_type=tv_series,tv_miniseries&genres=horror,thriller&count=100";

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
            <span className="listTitleFilms">Thriller and horror series</span>
            <Row className="px-5 pt-2">
                <CategoryTitleCards titles={titles} />
            </Row>
        </Container>
    );
};

export default ThrillerHorrorTitleList