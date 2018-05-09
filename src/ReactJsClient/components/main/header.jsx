import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Fa, NavItem, NavLinkContainer, NavLink } from 'mdbreact';
import { Container } from 'mdbreact'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
//Todo: Component
import PrivateRoute from '../main/private_route.jsx'
//Todo: Utils
import * as AuthenCommon from '../../utils/auth_common'
class Header extends Component {
    constructor(props) {
        super(props);
    }
    displayButtonSign = () => {
        let isAuthen = AuthenCommon.isUserAuthenticated();
        if (isAuthen) {
            return <ReactCSSTransitionGroup transitionName="example"
                transitionAppear={true} transitionAppearTimeout={500}
            >
                <NavItem>
                    <NavLink onClick={this.onLogOut} to="#"><Fa icon="sign-out" />Sign out</NavLink>
                </NavItem></ReactCSSTransitionGroup>
        }
        else {
            if (location.pathname == '/sign_up') {
                return <ReactCSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={500}
                >
                    <NavItem>
                        <NavLink to="/sign_in"><Fa icon="sign-in" />Sign in</NavLink>
                    </NavItem></ReactCSSTransitionGroup>
            } else if (location.pathname == '/sign_in') {
                return <ReactCSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={500}
                >
                    <NavItem>
                        <NavLink to="/sign_up"><Fa icon="user-plus" />Sign up</NavLink>
                    </NavItem>
                </ReactCSSTransitionGroup>
            }
            else {
                return <Fragment><ReactCSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={500}
                >
                    <NavItem>
                        <NavLink to="/sign_in"><Fa icon="sign-in" />Sign in</NavLink>
                    </NavItem></ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName="example"
                        transitionAppear={true} transitionAppearTimeout={500}
                    >
                        <NavItem>
                            <NavLink to="/sign_up"><Fa icon="user-plus" />Sign up</NavLink>
                        </NavItem>
                    </ReactCSSTransitionGroup></Fragment>
            }
        }
    }
    onLogOut = (e) => {
        AuthenCommon.deAuthenticateUser();
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="my-header">
                <Navbar dark expand="md" scrolling fixed="top" className="my-nav">
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/support">Support</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/index">About</NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        {this.displayButtonSign()}
                    </NavbarNav>
                </Navbar>
            </div>
        )
    }
}
Header.propTypes={
    history : PropTypes.object.isRequired
}
export default withRouter(Header);