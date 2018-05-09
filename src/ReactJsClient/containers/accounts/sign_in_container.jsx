import React,{ Fragment, Component } from 'react';
import { connect } from 'react-redux';
import SignIn from '../../components/accounts/sign_in_form.jsx'
import * as Action from '../../actions/action'
class SignInContainer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let { sign_in_success } = this.props;
        return(
            <Fragment>
                <SignIn
                    sign_in_success={sign_in_success}
                    />
            </Fragment>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        user_name: state.sign_in_success
    }
}
const mapDispatchToProp = (dispatch,props) => {
    return {
        sign_in_success : (data) => {
            dispatch(Action.sign_in_success_act(data))
        }
    }
}
export default connect(null,mapDispatchToProp)(SignInContainer);