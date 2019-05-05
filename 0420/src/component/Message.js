import React, {Component} from 'react';
import "./message.css"


class Message extends Component {

    render(){
        return(
            <div className = "message">
            {this.props.content}</div> //프롭스의 키값은 콘텐트 만 가져옴
        )
    }
}

export {
    Message
}