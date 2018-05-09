import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Fa, NavItem, NavLinkContainer, NavLink } from 'mdbreact';
import { Container } from 'mdbreact'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
//Todo: Component
import Header from '../../components/main/header.jsx'
//Todo: Untils

class HeaderContainer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Header />
        )
    }
    
}
export default HeaderContainer;