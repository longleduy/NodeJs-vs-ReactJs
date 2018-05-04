import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { callApi } from '../utils/apiCaller';
import SignUp from './accounts/sign_up_from.jsx';
import SignIn from './accounts/sign_in_form.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let token = localStorage.getItem('token');
        if(token == null){
            return <Redirect to='/authen_failed' />
        }
        return (
            <Fragment>
                <form>
                    <div className="col s12" style={style}>
                        <img src="http://mothershape.com/wp-content/uploads/2017/07/41-512.png" className="verify_img" style={{
                            width: '30%',
                            opacity: '.8'
                        }} />
                    </div>
                </form>
            </Fragment >
        )
    }

}