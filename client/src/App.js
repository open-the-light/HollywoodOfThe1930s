import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Actors from './components/Actors';
import StarWiki from './components/StarWiki';
import MovieWiki from './components/MovieWiki';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div>
          <Route component={Homepage} path='/' exact />
          <Route component={Actors} path='/actor_list' exact />
          <Route component={StarWiki} path='/actors' />
          <Route component={MovieWiki} path='/movies' />
          <Route component={LoginPage} path='/login' exact />
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
