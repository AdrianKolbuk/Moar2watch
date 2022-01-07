import React, { useState, useEffect, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TitleList from "../helpers/TitleList";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { getUserByIdApiCall } from '../../apiCalls/userApiCalls'
import { getCurrentUser } from '../../helpers/authHelper'
import { isAuthenticated } from '../../helpers/authHelper'

const RazzieWinnerList = () => {
    const [titles, setTitles] = useState([]);
    const getTitleRequest = async () => {

        const url = `https://imdb-api.com/API/AdvancedSearch/k_8v24mym4?groups=razzie_winners&count=100`

        const response = await fetch(url);
        const responseJson = await response.json();

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


    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    //Ref hook
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x - 50

        if (direction === "arrow-back" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${180 + distance}px)`
        }
        if (direction === "arrow-forward" && slideNumber < 100) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-180 + distance}px)`
        }
    }

    return (
        <div className="list-holiday">
            <span className="listTitle">Razzie award-winning titles</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className="arrow-back"
                    onClick={() => handleClick("arrow-back")}
                    style={{ display: !isMoved && "none" }}
                    fontSize='large'
                />
                <div className="containerr" ref={listRef}>
                    <TitleList titles={titles} titleLikeIds={titleLikeIds} titleWatchIds={titleWatchIds} titleLikes={titleLikes} titleWatches={titleWatches} />
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

export default RazzieWinnerList