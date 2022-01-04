//import './App.css';
import Header from './components/fragments/Header';
import React from 'react';
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
import SeriesPage from './components/seriesPage/SeriesPage';
import AwardWinnersPage from './components/awardWinnersPage/AwardWinnersPage';
import Top100sPage from './components/top100sPage/Top100sPage';
import RegistrationForm from './components/form/RegistrationForm';
import Likelist from './components/likelist/Likelist';
import Watchlist from './components/watchlist/Watchlist';

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
            <Route exact
              path="/login"
              render={(props) => (
                <LoginForm handleLogin={this.handleLogin} />
              )}
            />
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/results" component={SearchResult} />
            <Route path="/films" >
              <FilmsPage />
            </Route>
            <Route path="/series" >
              <SeriesPage />
            </Route>
            <Route exact path="/award_winners" component={AwardWinnersPage} />
            <Route exact path="/top100s" component={Top100sPage} />
            <Route exact path="/likelist" component={Likelist} />
            <Route exact path="/watchlist" component={Watchlist} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
