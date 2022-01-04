import React, { useState, useEffect, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TitleList from "../helpers/TitleList";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const OscarWinnerList = () => {
    const [titles, setTitles] = useState([]);
    const getTitleRequest = async () => {
        const url = `https://imdb-api.com/API/AdvancedSearch/k_8v24mym4?groups=oscar_winners&count=100`

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setTitles(responseJson.results)

    }

    useEffect(() => {
        getTitleRequest();
    }, []);

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    //Ref hook
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x - 50

        if (direction === "arrow-back" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${170 + distance}px)`
        }
        if (direction === "arrow-forward" && slideNumber < 100) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-170 + distance}px)`
        }
    }

    return (
        <div className="list-holiday">
            <span className="listTitle">Oscar-winning titles</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className="arrow-back"
                    onClick={() => handleClick("arrow-back")}
                    style={{ display: !isMoved && "none" }}
                    fontSize='large'
                />
                <div className="containerr" ref={listRef}>
                    <TitleList titles={titles} />
                </div>
                <ArrowForwardIosOutlinedIcon
                    className="arrow-forward"
                    onClick={() => handleClick("arrow-forward")}
                    fontSize='large'
                />
            </div >
        </div >
    );
};

export default OscarWinnerList