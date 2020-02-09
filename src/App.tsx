import React, { Fragment, useContext } from 'react';
import { Store } from './Store';
import { BrowserRouter, Link } from "react-router-dom";
import { Switch, Route } from "react-router";

import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App(props: any) {
  const { state } = useContext(Store)

  return (
    <BrowserRouter>
      <Fragment>
        <header className="header">
          <div>
            <h1>Rick and Morty</h1>
            <h3>Escolha seus episodios favoritos!</h3>
          </div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/favourites'> Favourite(s): </Link>
            <span>{state.favourites.length}</span>
          </div>
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favourites" component={Favourites} />
        </Switch>

      </Fragment>
    </BrowserRouter>
  );
}

export default App;
