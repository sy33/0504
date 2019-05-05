import React, {Component} from 'react';
import './App.css'
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';

class App extends Component {

  state = {

    content:"",
    todos: ["씻기"]
  }

  add = (content) => {                                   
    this.setState({
      todos: [...this.state.todos, content]
    })
  }

  delete = (index) => {

      this.setState({
        todos: [...this.state.todos.slice(0,index), ...this.state.todos.slice(index+1)]
      })
  }

  onClick = () => {

    this.props.add(this.state.content);
}


  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
  render(){

      const { todos } = this.state;


  return (
    <div className="container">
      <div className="section">
        <TodoList todos = {todos} onItemDelete = {this.delete}/>
        </div>
      <div className="section">
        <AddTodo add = {this.add}/>
      </div>
    </div>
  );
}
}

export default App;
