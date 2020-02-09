import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';
import { BrowserRouter, Link } from "react-router-dom";
import { Switch, Route } from "react-router";

import Home from './pages/Home';
import Favourites from './pages/Favourites';

const processURL = process.env.URL || '';

function App(props: any) {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    const local_fav = localStorage.getItem('local_fav_ep')
    if (local_fav)
      dispatch({ payload: (JSON.parse(local_fav)), type: 'ADD_FAV' });
  }, [])

  return (
    <BrowserRouter>
      <Fragment>
        <header className="header">
          <div>
            <h1>Rick and Morty</h1>
            <h3>Escolha seus episodios favoritos!</h3>
          </div>
          <div>
            <Link to={`${processURL}/`}>Home</Link>
            <Link to={`${processURL}/favourites`}> Favourite(s): </Link>
            <span>{state.favourites.length}</span>
          </div>
        </header>

        <Switch>
          <Route path={`${processURL}/`} exact component={Home} />
          <Route path={`${processURL}/favourites`} component={Favourites} />
        </Switch>

      </Fragment>
    </BrowserRouter>
  );
}

export default App;
