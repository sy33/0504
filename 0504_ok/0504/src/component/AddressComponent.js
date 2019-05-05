import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeAddress} from '../redux/userReducer';

class AddressComponent extends Component{

    static defaultProps ={
        name: 'default.address'
    }

    render(){
        return <div>
            {this.props.address}
            <button onClick={this.props.changeAddress}>changeAddress</button>

        </div>
    }
}

const mapStateToProps = (state)=>{  // 프롭스가 바뀜
    return {
        address: state.user.address 
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeAddress: ()=>dispatch(changeAddress('new Address'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressComponent);