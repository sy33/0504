import React, { Component } from 'react';
import { Chatlist } from './component/Chatlist'






class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Chatlist></Chatlist>
      </div>
    );
  }
}



export default App;
