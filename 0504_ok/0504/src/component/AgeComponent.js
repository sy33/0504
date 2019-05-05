import React, {Component} from 'react';

class AgeComponent extends Component{

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
        age: state.age
    }
}

export default AgeComponent; 