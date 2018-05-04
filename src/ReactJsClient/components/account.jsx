import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { callApi } from '../utils/apiCaller';
import SignUp from './accounts/sign_up_from.jsx';
import SignIn from './accounts/sign_in_form.jsx';
import Index from './index.jsx';
import Authen_Failed from '../components/authen_failed.jsx'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class Accounts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route path="/sign_up" render={() => <SignUp />} exact />
                        <Route path="/" render={() => <SignIn />} exact />
                        <Route path="/index"  render={() => <Index />} exact />
                        <Route path="/authen_failed"  render={() => <Authen_Failed />} exact />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

}