import React from 'react'
import {removeCounter } from '../Actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class RemoveCounter extends React.Component {
   
    render(){
        return(
            <div>
                <form>
                    <button
                        onClick={(e) => {e.preventDefault();
                                this.props.dispatch(removeCounter())}}>
                                Remove
                    </button>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeCounter, dispatch) }

}
 export default connect(mapDispatchToProps)(RemoveCounter);