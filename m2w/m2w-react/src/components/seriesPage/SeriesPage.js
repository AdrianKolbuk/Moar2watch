import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SeriesCategoryList from "../helpers/SeriesCategoryList"
import {
    BrowserRouter,
    Routes,
    Route,

} from 'react-router-dom'


function SeriesPage() {
    return (
        <div className="filmsPage">
            <SeriesCategoryList />

        </div>
    )
}

export default SeriesPage