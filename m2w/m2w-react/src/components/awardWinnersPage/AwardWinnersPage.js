import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import OscarWinnerList from "./OscarWinnerList"
import BestPicturesWinnerList from "./BestPicturesWinnerList"
import EmmyWinnerList from "./EmmyWinnerList"
import GoldenGlobeWinnerList from "./GoldenGlobeWinnerList"
import RazzieWinnerList from "./RazzieWinnerList"



function AwardWinnersPage() {
    return (
        <div className="home">
            <OscarWinnerList />
            <BestPicturesWinnerList />
            <EmmyWinnerList />
            <GoldenGlobeWinnerList />
            <RazzieWinnerList />
        </div>
    )
}

export default AwardWinnersPage