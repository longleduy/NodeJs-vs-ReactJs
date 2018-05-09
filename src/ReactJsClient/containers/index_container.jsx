import React,{ Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Index from '../components/index.jsx'
import * as action from '../actions/action'
import * as ActionAPI from '../actions/action_api';
class IndexContainer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let { user_name,actFetchDataApiReques } = this.props;
        return(
            <Fragment>
                <Index
                    user_name={user_name}
                    actFetchDataApiReques={actFetchDataApiReques}
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
        actFetchDataApiReques: ()=>{
            dispatch(ActionAPI.actFetchDataApiReques())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(IndexContainer);