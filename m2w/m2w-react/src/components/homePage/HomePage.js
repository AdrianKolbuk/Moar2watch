import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import PopularMovies from "./PopularMovies"
import PopularTvShows from "./PopularTvShows"
import SuperHeroMovies from "./SuperHeroMovies"
import HolidayMovies from "./HolidayMovies"

function HomePage() {
    return (
        <div className="home">
            <PopularMovies />
            <PopularTvShows />
            <SuperHeroMovies />
            <HolidayMovies />
        </div>
    )
}

export default HomePage