import React, {Component} from 'react';

class Comment extends Component {
    render(){
        const {content} = this.props; // props는 위에서 부터 넘기는 값이라 바꿀수 없음 -> state 사용  
        // 보이기만하는 글씨(수정필요없는 내용들) props // input(수정할수 있는 값)은 state로 
        // const content = this.props.content;
        return(
            <div>
                 {content}
            </div>
        )
    }
}

export {
    Comment
};