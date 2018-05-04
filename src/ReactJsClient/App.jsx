import React, { Component, Fragment } from 'react';
import Accounts from './components/account.jsx';
import Index from './components/index.jsx'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="row parent-div">
                    <div className="container">
                        <Accounts />
                    </div>
                </div>
            </Fragment>
        )
    }
}