import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryList from "../helpers/CategoryList"
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
} from 'react-router-dom'
import HomePage from '../homePage/HomePage';


function FilmsPage() {
    return (
        <div className="filmsPage">
            <CategoryList />
            <Outlet />
        </div>
    )
}

export default FilmsPage