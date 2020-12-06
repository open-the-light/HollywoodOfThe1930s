import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Actors from './components/Actors';
import StarWiki from './components/StarWiki';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div>
          <Route component={Homepage} path='/' exact />
          <Route component={Actors} path='/actor_list' exact />
          <Route component={StarWiki} path='/actors' />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
