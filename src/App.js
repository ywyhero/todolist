import React, { Component } from 'react';
import './App.css';
import {addTodo, deleteTodo, changeTodo, changeDone, deleteDone} from './store/action'
import { connect } from 'react-redux'
import Header from './Header'
import Content from './Content'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  // addToDo(item){

  //   // this.setState({
  //   //   todos: [...this.state.todos, item]
  //   // })
  // }
  // deleteToDo(index){
  //     let todos = this.state.todos.filter(item => item.done === false)
  //     let dones =  this.state.todos.filter(item => item.done)
  //     todos.splice(index, 1)
  //     this.setState({
  //       todos: [...dones, ...todos]
  //     })
  // }
  deleteDone(index){
      let todos = this.state.todos.filter(item => item.done === false)
      let dones =  this.state.todos.filter(item => item.done)
      dones.splice(index, 1)
      this.setState({
        todos: [...dones, ...todos]
      })
  }
  // changeToDo(index){
  //   let todos = this.state.todos.filter(item => item.done === false)
  //   let dones =  this.state.todos.filter(item => item.done)
  //   let newDone = {...todos[index], done: true}
  //   todos.splice(index, 1)
  //   dones = [...dones, newDone]
  //   this.setState({
  //     todos: [...dones, ...todos]
  //   })
  // }
  // changeDone(index){
  //   let todos = this.state.todos.filter(item => item.done === false)
  //   let dones =  this.state.todos.filter(item => item.done)
  //   let newToDo = {...dones[index], done: false}
  //   dones.splice(index, 1)
  //   todos = [...todos, newToDo]
  //   this.setState({
  //     todos: [...todos, ...dones]
  //   })
    
  // }
  render() {
    const { dispatch, visibleTodos } = this.props
    return (
      <div className="App">
        <Header addToDo={text => dispatch(addTodo(text))}/>
        <Content todos={visibleTodos} changeDone={index => dispatch(changeDone(index))} changeToDo={index => dispatch(changeTodo(index))} deleteToDo={index => dispatch(deleteTodo(index))} deleteDone={index => dispatch(deleteDone(index))}/>
      </div>
    );
  }
}
function select(state) {
  console.log(state)
  return {
    visibleTodos: state.todos
  }
}
export default connect(select)(App)
