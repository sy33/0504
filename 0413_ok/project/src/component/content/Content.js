import React from 'react';

export class Content extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count:0,
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
        
    }

    increaseCount(){
        //this.state.count+=1;
        const current = this.state.count;
        this.setState({
            count: current+1
        })
        //this.state.count = this.state.sount+1;
        console.log(this.state);
        
    }

    decreaseCount(){

        //this.state.count-=1;
        const current = this.state.count;
        this.setState({
            count: current-1
        })      
        //this.state.count = this.state.sount-1;
        console.log(this.state);
    }

    resetCount(){

        this.setState({
            count: 0
        })

        console.log(this.state);

    }


    render(){
        const {count} = this.state;
        return (
            <div>
                <h1> {count} </h1>  
                <button onClick={this.increaseCount}>Up</button>  
                <button onClick={this.decreaseCount}>Down</button>  
                <button onClick={this.resetCount}>Reset</button>                 
            </div>
            )
    }
}