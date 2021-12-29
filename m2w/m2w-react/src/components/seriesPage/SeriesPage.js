import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SeriesCategoryList from "../helpers/SeriesCategoryList"
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from 'react-router-dom'


function SeriesPage() {
    return (
        <div className="filmsPage">
            <SeriesCategoryList />
            <Outlet />
        </div>
    )
}

export default SeriesPage