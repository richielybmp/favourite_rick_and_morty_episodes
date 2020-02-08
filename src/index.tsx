import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { StoreProvider } from './Store';

import { Router, RouteComponentProps } from '@reach/router'

import Home from './pages/Home'
import Favourites from './pages/Favourites'

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path='/'>
                <RouterPage pageComponent={<Home />} path='/' />
                <RouterPage pageComponent={<Favourites />} path='/favourites' />
            </App>
        </Router>
    </StoreProvider>
    , document.getElementById('root'));
