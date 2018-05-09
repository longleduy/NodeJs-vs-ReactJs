import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container } from 'mdbreact'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
//Todo: Component
import * as ContainerRoutes from '../routes/container_routes.jsx'
import SignInContainer from '../../containers/accounts/sign_in_container.jsx'
import HomePublic from '../public/home_page.jsx'
import { PrivateRoute } from '../main/private_route.jsx'
import Authen_Failed from '../accounts/authen_failed.jsx'
import NotFoundPage from '../main/not_found_page.jsx'
//Todo: Untils
import * as AuthenCommon from '../../utils/auth_common'

export default class ContainerForm extends Component {
    constructor(props) {
        super(props);
    }
    showPublicRoute = () => {
        let route = null;
        route = ContainerRoutes._public_routes.map((router, index) => {
            return <Route
                key={index}
                path={router.path}
                render={router.main}
                exact={router.exact}
            />
        })
        return route;
    }
    showPrivateRoute = () => {
        let route = null;
        route = ContainerRoutes._privte_routes.map((router, index) => {
            return <PrivateRoute path={router.path} component={router.component} key={index}/>
        })
        return route;
    }
    render() {
        return (
            <Container className="parent-div">
                <div className="container">
                    <Switch>
                        {this.showPublicRoute()}
                        {this.showPrivateRoute()}
                        <Route render={() => <NotFoundPage />} />
                    </Switch>
                </div>
            </Container>
        )
    }
}