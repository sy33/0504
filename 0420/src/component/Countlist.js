import React, {Component} from 'react';

class Countlist extends Component {

    constructor(props){
        super(props) // 자식 클래스가 자신을 생성할 때 부모 클래스의 생성자를 불러 초기화 할때 사용
        this.state = { // this 현재 클래스에 정의된 생성자를 부를때 사용됩니다
            number: 0,
            result: 0,
        }

        this.onClick = this.onClick.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
    }


    onClick(){

        this.setState({
            result: this.state.number
        })
    }

    onNumberChange(e){ // e 이벤트

        this.setState({
            number: e.target.value
        })
    }

    render(){



        return <div>
         <div>
         <input value={this.state.number} onChange={this.onNumberChange}></input>
         <button onClick={this.onClick}>Click</button>
         </div>

        <h1>
            {this.state.result}
        </h1>
        </div>
    }
}

export {
    Countlist
};

