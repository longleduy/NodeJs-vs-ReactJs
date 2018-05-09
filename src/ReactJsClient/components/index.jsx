import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import * as Common from '../utils/common'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
export default class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
       // this.props.actFetchDataApiReques();
    }
    render() {
        // let {user_name} = this.props;
        let token = Common.getItemLocalStorage('token');
        if(token == null){
            return <Redirect to='/authen_failed' />
        }
        return (
            <Fragment>
                <ReactCSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={500}
                >
                    <div className="home-div">
                        <label className='home-big-title'>Permisson Verified</label>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment >
        )
    }

}