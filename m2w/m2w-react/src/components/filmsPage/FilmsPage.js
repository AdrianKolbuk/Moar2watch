import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryList from "../helpers/CategoryList"
import {
    BrowserRouter,
    Routes,
    Route,

} from 'react-router-dom'
import HomePage from '../homePage/HomePage';


function FilmsPage() {
    return (
        <div className="filmsPage">
            <CategoryList />

        </div>
    )
}

export default FilmsPage