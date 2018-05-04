import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { callApi } from '../../utils/apiCaller';
import {Link} from "react-router-dom";
import * as validate from '../../contants/accounts/sign'
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                user_name: '',
                pass_word: '',
                re_pass_word: '',
                email: ''
            },
            statusSignUp: {
                success: false
            }
        }
    }
    onChange = (e) => {
        let _name = e.target.name;
        let _value = e.target.value;
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [_name]: _value
            }
        })
    }
    onValidPassWord = () => {
        let _pass_word = this.state.userInfo.pass_word;
        let _re_pass_word = this.state.userInfo.re_pass_word;
        if (_pass_word != '' && _pass_word.length < 8) {
            $('#error_pass_word').text(validate.VALIDATE_CHARACTER);
            $('#pass_word_label').addClass('err_label');
            return false;
        }
        else if (_pass_word != '' || _re_pass_word != '') {
            $('#error_pass_word').text('');
            $('#pass_word_label').removeClass('err_label');
            if (_pass_word != _re_pass_word) {
                $('#pass_word').removeClass('success-input').addClass('error-input');
                $('#re_pass_word').removeClass('success-input').addClass('error-input');
                return false;
            }
            else {
                $('#pass_word').removeClass('error-input').addClass('success-input');
                $('#re_pass_word').removeClass('error-input').addClass('success-input');
                return true;
            }
        }
        else {
            $('#error_pass_word').text('');
            $('#pass_word_label').removeClass('err_label');
            $('#pass_word').removeClass('error-input success-input');
            $('#re_pass_word').removeClass('error-input success-input');
            return true;
        }
    }
    onValidUserName = () => {
        let _userName = this.state.userInfo.user_name;
        if (_userName.length < 8 && _userName != '') {
            $('#error_user_name').text(validate.VALIDATE_CHARACTER);
            $('#user_name_label').addClass('err_label');
            return false;
        }
        else {
            $('#error_user_name').text('');
            $('#user_name_label').removeClass('err_label');
            return true;
        }
    }
    onSignUp = (e) => {
        e.preventDefault();
        callApi('user/sign_up', 'POST', this.state.userInfo).then(res => {
            this.setState({
                userInfo: {
                    user_name: '',
                    pass_word: '',
                    re_pass_word: '',
                    email: ''
                },
                statusSignUp: {
                    success: res.data.status
                }
            })
        })
    }
        onValidEmail = () => {
        let _email = this.state.userInfo.email;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(_email)) {
            $('#error_email').text(validate.VALIDATE_EMAIL);
            $('#email_label').addClass('err_label');
            return false;
        }
        else {
            callApi('user/check_email', 'POST', this.state.userInfo).then(res => {
                if (res.data.status == false) {
                    $('#error_email').text(res.data.message);
                    $('#email_label').addClass('err_label');
                    return false;
                }
                else {
                    $('#error_email').text('');
                    return true;
                }
            })

        }
    }
    cleanError = () => {
        if ($('#error_email').text() != '') {
            $('#error_email').text('');
            $('#email_label').removeClass('err_label');
        }
    }
    activeButton = () => {
        let { user_name, pass_word, re_pass_word, email } = this.state.userInfo;
        if (user_name != '' && pass_word != '' && re_pass_word != '' && email != '' && pass_word == re_pass_word && this.onValidPassWord() == true && this.onValidUserName() == true) {
            return true;
        }
        else {
            return false;
        }
    }
    render() {
        let { user_name, pass_word, re_pass_word, email } = this.state.userInfo;
        return (
                <form onSubmit={this.onSignUp}>
                    <div className="col s6 offset-s3 login-component z-depth-2">
                        <label className="login-title">Sign In</label>
                        
                            {this.state.statusSignUp.success == true ?<div className='err_sign_up'> <i className="material-icons">done</i><label >Đăng ký thành công</label></div> : ''}
                        <div className="col s12 login-info">
                            <div className="col s3">
                                <label id="user_name_label">User name</label>
                            </div>
                            <div className="col s12">
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    ref="user_name"
                                    value={user_name}
                                    onChange={this.onChange}
                                    onKeyUp={this.onValidUserName}
                                    autoComplete="off" />
                            </div>
                            <label className="error_label" id="error_user_name" style={this.onValidUserName() ? { display: 'none' } : { display: '' }}></label>
                        </div>
                        <div className="col s6 login-info">
                            <div className="col s3" style={{ width: '34%' }}>
                                <label id="pass_word_label">Pass word</label>
                            </div>
                            <div className="col s12">
                                <input
                                    type="password"
                                    id="pass_word"
                                    name="pass_word"
                                    ref="pass_word"
                                    value={pass_word}
                                    onChange={this.onChange}
                                    onKeyUp={this.onValidPassWord}
                                    autoComplete="off" />
                            </div>
                            <label className="error_label" id="error_pass_word" style={this.onValidPassWord() ? { display: 'none' } : { display: '' }}></label>
                        </div>
                        <div className="col s6 login-info">
                            <div className="col s3">
                                <label id="re_pass_word_label">RePass</label>
                            </div>
                            <div className="col s12">
                                <input
                                    type="password"
                                    id="re_pass_word"
                                    name="re_pass_word"
                                    ref="re_pass_word"
                                    value={re_pass_word}
                                    onChange={this.onChange}
                                    onKeyUp={this.onValidPassWord}
                                    autoComplete="off" />
                            </div>
                        </div>
                        <div className="col s12 login-info">
                            <div className="col s3">
                                <label id="email_label">Email</label>
                            </div>
                            <div className="col s12">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    ref="email"
                                    value={email}
                                    onChange={this.onChange}
                                    onBlur={this.onValidEmail}
                                    onClick={this.cleanError}
                                    autoComplete="off" />
                            </div>
                            <label className="error_label" id="error_email"></label>
                        </div>
                        <div className="col s12 login-btn">
                            <Link className="forgot-pass col s12" to='/'>Have account ? Sign In now</Link>
                            <div className="col s12 btn-div">
                                <button className="btn waves-effect waves-light" type="submit" id="btn-signin" disabled={!this.activeButton()} ><i className="material-icons">fingerprint</i>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
        )
    }

}