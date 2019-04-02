import React from 'react'
import { connect } from 'react-redux';

class Counter extends  React.Component{

    render() {
        return(
            <div>
                 <h1>{this.props.count}</h1>
            </div>
        )
    }
}
 function mapStateToProps(state){
     return {
         count: state.counterReducer,
     };
 }
 export default connect(mapStateToProps)(Counter)