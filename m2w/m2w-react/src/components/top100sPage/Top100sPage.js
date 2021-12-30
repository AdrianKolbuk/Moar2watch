import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TopWarMovies from "./TopWarMovies"
import TopAnimatedSeries from "./TopAnimatedSeries"
import TopAnimatedMovies from "./TopAnimatedMovies"
import TopDisneyMovies from "./TopDisneyMovies"
import TopRCertifiedMovies from "./TopRCertifiedMovies"
import Top8PlusRatingTitles from "./Top8PlusRatingTitles"

function Top100sPage() {
    return (
        <div className="home">
            <Top8PlusRatingTitles />
            <TopAnimatedSeries />
            <TopAnimatedMovies />
            <TopDisneyMovies />
            <TopWarMovies />
            <TopRCertifiedMovies />
        </div>
    )
}

export default Top100sPage