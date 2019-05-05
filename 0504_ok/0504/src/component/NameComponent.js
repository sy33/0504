import React, {Component} from 'react';
import {connect} from 'react-redux';

class NameComponent extends Component{

    static defaultProps ={
        name: 'default.name'
    }

    render(){
        return <div>
            {this.props.name}


        </div>
    }
}

const mapStateToProps = (state)=>{
    return {
        name: state.name
    }
}

export default connect(mapStateToProps,null)(NameComponent);