import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import CategoryList from "../helpers/CategoryList"
import {
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import ScifiFantasyTitleList from './ScifiFantasyTitleList';
import DramaTitleList from './DramaTitleList';
import ThrillerHorrorTitleList from './ThrillerHorrorTitleList';
import ActionAdventureTitleList from './ActionAdventureTitleList';
import RomanceTitleList from './RomanceTitleList';
import ComedyTitleList from './ComedyTitleList';
import CriminalTitleList from './CriminalTitleList';
import DocumentaryTitleList from './DocumentaryTitleList';
import FamilyTitleList from './FamilyTitleList';
import MusicalTitleList from './MusicalTitleList';

import 'bootstrap/dist/css/bootstrap.min.css'


function FilmsPage() {
    const { path } = useRouteMatch();

    return (
        <div className="filmsPage">
            <CategoryList />

            <Switch>
                <Route path={`${path}/drama`} >
                    <DramaTitleList />
                </Route>
                <Route path={`${path}/scifi_fantasy`} >
                    <ScifiFantasyTitleList />
                </Route>
                <Route path={`${path}/thriller_horror`} >
                    <ThrillerHorrorTitleList />
                </Route>
                <Route path={`${path}/action_adventure`} >
                    <ActionAdventureTitleList />
                </Route>
                <Route path={`${path}/romance`} >
                    <RomanceTitleList />
                </Route>
                <Route path={`${path}/comedy`} >
                    <ComedyTitleList />
                </Route>
                <Route path={`${path}/criminal`} >
                    <CriminalTitleList />
                </Route>
                <Route path={`${path}/family`} >
                    <FamilyTitleList />
                </Route>
                <Route path={`${path}/documentary`} >
                    <DocumentaryTitleList />
                </Route>
                <Route path={`${path}/musical`} >
                    <MusicalTitleList />
                </Route>
            </Switch>
        </div>
    )
}

export default FilmsPage