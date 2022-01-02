//import './App.css';
import Header from './components/fragments/Header';
import React, { useReducer } from 'react';
import SearchResult from './components/search/SearchResult';
import Footer from './components/fragments/Footer';
import LoginForm from './components/form/LoginForm';
import HomePage from './components/homePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { getCurrentUser } from "./helpers/authHelper";
import FilmsPage from './components/filmsPage/FilmsPage';
import ScifiFantasyTitleList from './components/filmsPage/ScifiFantasyTitleList';
import DramaTitleList from './components/filmsPage/DramaTitleList';
import ThrillerHorrorTitleList from './components/filmsPage/ThrillerHorrorTitleList';
import ActionAdventureTitleList from './components/filmsPage/ActionAdventureTitleList';
import RomanceTitleList from './components/filmsPage/RomanceTitleList';
import ComedyTitleList from './components/filmsPage/ComedyTitleList';
import CriminalTitleList from './components/filmsPage/CriminalTitleList';
import DocumentaryTitleList from './components/filmsPage/DocumentaryTitleList';
import FamilyTitleList from './components/filmsPage/FamilyTitleList';
import MusicalTitleList from './components/filmsPage/MusicalTitleList';

import SeriesPage from './components/seriesPage/SeriesPage';
import SeriesScifiFantasyTitleList from './components/seriesPage/ScifiFantasyTitleList';
import SeriesDramaTitleList from './components/seriesPage/DramaTitleList';
import SeriesThrillerHorrorTitleList from './components/seriesPage/ThrillerHorrorTitleList';
import SeriesActionAdventureTitleList from './components/seriesPage/ActionAdventureTitleList';
import SeriesRomanceTitleList from './components/seriesPage/RomanceTitleList';
import SeriesComedyTitleList from './components/seriesPage/ComedyTitleList';
import SeriesCriminalTitleList from './components/seriesPage/CriminalTitleList';
import SeriesDocumentaryTitleList from './components/seriesPage/DocumentaryTitleList';
import SeriesFamilyTitleList from './components/seriesPage/FamilyTitleList';
import SeriesMusicalTitleList from './components/seriesPage/MusicalTitleList';

import AwardWinnersPage from './components/awardWinnersPage/AwardWinnersPage';

import Top100sPage from './components/top100sPage/Top100sPage';
import RegistrationForm from './components/form/RegistrationForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      prevPath: ''
    }
  }

  handleLogin = (user) => {
    localStorage.setItem("user", user)
    this.setState({ user: user })
  }

  handleLogout = () => {
    localStorage.removeItem("user");
    this.setState({ user: undefined })
  }

  componentDidMount() {
    const currentUser = getCurrentUser()
    this.setState({ user: currentUser })
  }

  render() {
    return (
      <Router>
        <Header handleLogout={this.handleLogout} />
        <main>
          <Switch>
            <Route exact path="/login" render={(props) => (
              <LoginForm handleLogin={this.handleLogin} />
            )} />
            {/* <Route exact path="/login" element={<LoginForm handleLogin={this.handleLogin} />} /> */}
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/search" element={<SearchResult />} />
            <Route exact path="/films" element={<FilmsPage />}>
              <Route exact path="/films/drama" element={<DramaTitleList />} />
              <Route exact path="/films/scifi_fantasy" element={<ScifiFantasyTitleList />} />
              <Route exact path="/films/thriller_horror" element={<ThrillerHorrorTitleList />} />
              <Route exact path="/films/action_adventure" element={<ActionAdventureTitleList />} />
              <Route exact path="/films/romance" element={<RomanceTitleList />} />
              <Route exact path="/films/comedy" element={<ComedyTitleList />} />
              <Route exact path="/films/criminal" element={<CriminalTitleList />} />
              <Route exact path="/films/family" element={<FamilyTitleList />} />
              <Route exact path="/films/documentary" element={<DocumentaryTitleList />} />
              <Route exact path="/films/musical" element={<MusicalTitleList />} />
            </Route>
            <Route exact path="/series" element={<SeriesPage />}>
              <Route exact path="/series/drama" element={<SeriesDramaTitleList />} />
              <Route exact path="/series/scifi_fantasy" element={<SeriesScifiFantasyTitleList />} />
              <Route exact path="/series/thriller_horror" element={<SeriesThrillerHorrorTitleList />} />
              <Route exact path="/series/action_adventure" element={<SeriesActionAdventureTitleList />} />
              <Route exact path="/series/romance" element={<SeriesRomanceTitleList />} />
              <Route exact path="/series/comedy" element={<SeriesComedyTitleList />} />
              <Route exact path="/series/criminal" element={<SeriesCriminalTitleList />} />
              <Route exact path="/series/family" element={<SeriesFamilyTitleList />} />
              <Route exact path="/series/documentary" element={<SeriesDocumentaryTitleList />} />
              <Route exact path="/series/musical" element={<SeriesMusicalTitleList />} />
            </Route>
            <Route exact path="/award_winners" element={<AwardWinnersPage />} />
            <Route exact path="/top100s" element={<Top100sPage />} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
