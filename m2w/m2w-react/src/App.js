//import './App.css';
import Header from './components/fragments/Header';
import React, { useReducer } from 'react';
import SearchResult from './components/search/SearchResult';
import Footer from './components/fragments/Footer';
import LoginForm from './components/form/loginForm';
import HomePage from './components/homePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Link } from 'react-router-dom'
import FilmsPage from './components/filmsPage/FilmsPage';
import HolidayMovies from './components/homePage/HolidayMovies';

function App() {
  return (
    <Router>
      <div className='app-div'>
        <Header />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/search" element={<SearchResult />} />
          <Route exact path="/films" element={<FilmsPage />}>
            <Route exact path="/films/drama" element={<HolidayMovies />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
