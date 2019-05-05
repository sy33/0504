import React, {Component} from 'react';
import { Message } from './Message' 


//.component/Message 는 바로
class Chatlist extends Component {

    constructor(props){
        super(props);
        this.state ={
            messages: [],
            content:"",
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    } //



    onChange(e){
        this.setState({
            content: e.target.value
        })
    }

    onClick(e){
        //메세지를 input에 넣고 초기화
        //const messages = this.state.messages;
        const {messages,content} = this.state;
        messages.push(content);
        this.setState({
            messages: messages,
            content:""
        })
        // console.log(this.state.messages)
        // console.log(this.state.content)
    } 
    
    // 


    render(){

        const {content, messages} = this.state;

        const printMessages = messages.map((str)=>{ // map 함수가 새로운 배열로 만들어 줌
            return <Message content={str}></Message>

        })

        /**
         * printMessages = [<div>abc</div>]
         * 
         */

        // var list = [1,2,3,4,5];

        // var newlist = list.map(function(item){
        //    return
        //})

        return(
            <div>
            <div>메세지들</div>
            {printMessages}
            <div>

                <input value = {content} onChange={this.onChange}></input>
                <button onClick = {this.onClick}>Click</button>
            </div>
            </div>
        )
    }
}

export {
    Chatlist
};