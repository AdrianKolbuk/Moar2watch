import React, { useState, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link, useRouteMatch } from 'react-router-dom'

const CategoryList = () => {

    const { url } = useRouteMatch();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    //Ref hook
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x - 50

        if (direction === "arrow-back" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${150 + distance}px)`
        }
        if (direction === "arrow-forward" && slideNumber < 1) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-150 + distance}px)`
        }
    }


    return (
        <div className="list pb-3">
            <span className="listTitle">Categories</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className="arrow-back"
                    onClick={() => handleClick("arrow-back")}
                    style={{ display: !isMoved && "none" }}
                    fontSize='large'
                />
                <div className="containerr" ref={listRef}>

                    <Link to={`${url}/drama`} style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/obyczajowy.png" alt="Drama" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Drama</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/scifi_fantasy" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/sci-fi_fantasy.png" alt="Scifi-fantasy" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Sci-fi, Fantasy</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/thriller_horror" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/Thriller_horror.png" alt="Thriller-horror" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Thriller, Horror</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/action_adventure" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/akcja_przygodowy.png" alt="Action-adventure" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Action, adventure</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/romance" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/romantyczne.png" alt="Romance" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Romance</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/comedy" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/komedia.png" alt="Comedy" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Comedy</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/criminal" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/kryminalny.png" alt="Criminal" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Criminal</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/family" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/familijne.png" alt="Family" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Family</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/documentary" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/dokumentalny.png" alt="Documentary" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Documentary</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/films/musical" style={{ textDecoration: 'none', color: "white" }}>
                        <div className='category-listItem'>
                            <img className="category-img" src="/img/muzyczny.png" alt="Musical" />
                            <div className='itemInfo'>
                                <div className='category-itemInfoTop'>
                                    <span>Musical</span>
                                </div>
                            </div>
                        </div>
                    </Link>

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

export default CategoryList