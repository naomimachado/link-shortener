//The home page component

import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import store from '../store';
import Nav from './nav';
import UrlForm from './url-form';
import Footer from './footer';
import ShortLink from "./short-link";

let Page = connect((state) => state)((props) => {

    store.subscribe(() => {
        localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    })

    return(
        <Router>
            <div>
                <Route path="/" exact={true} render={
                    () =>
                <div>
                    <Nav props={props}/>
                    <UrlForm props={props} root={this}/>
                    <Footer/>
                </div>
                }/>
                <Route path="/shortLink" exact={true} render={
                    () =>
                        <div>
                            <Nav props={props}/>
                            <UrlForm props={props} root={this}/>
                            <ShortLink props={props}/>
                            <Footer/>
                        </div>
                }/>
            </div>
    </Router>);
});

export default Page;