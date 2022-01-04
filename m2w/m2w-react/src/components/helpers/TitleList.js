import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const TitleList = (props) => {
    return (
        <>
            {props.titles.map((title, index) => (
                <div className='listItem' key={title.id}>
                    <img className="poster" src={title.image} alt="Poster" />
                    <div className='itemInfo'>
                        <div className='icons'>
                            <AddIcon />
                            <ThumbUpAltOutlinedIcon />
                        </div>
                        <div className='itemInfoTop'>
                            <span>{title.title} {title.year}</span>
                        </div>
                        <div className='rating'>
                            <span>imDb rating:  {title.imDbRating}/10</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TitleList;