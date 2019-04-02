import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addCounter } from '../Actions'
class AddCounter extends React.Component {

    render() {
        return(
            <div>
                <form>
                    <button
                    onClick={
                        (e) => {e.preventDefault();
                        this.props.dispatch(addCounter())
                        }}>ADD
                    </button>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addCounter,dispatch) }
}
export default connect(mapDispatchToProps)(AddCounter);