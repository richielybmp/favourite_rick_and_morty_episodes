import React, { Fragment, useContext } from 'react';
import { Store } from './Store';
import { Link } from '@reach/router'

function App(props: any) {
  const { state } = useContext(Store)

  return (
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

      {props.children}

    </Fragment>
  );
}

export default App;
