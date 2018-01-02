import React, {Component} from 'react'
import './Content.css'
class Content extends Component{
    render(){
        let todoCount = this.props.todos.filter(todo => todo.done === false).length;
        let todos = this.props.todos.filter(todo => todo.done === false);
        let doneCount = this.props.todos.filter(todo => todo.done).length;
        let dones = this.props.todos.filter(todo => todo.done);
        return(
            <div className="content">
                <div className="content-todo">
                    <div className="content-title">
                        <span>正在进行</span>
                        <span className="content-count">{todoCount}</span>
                    </div>
                    <ul className="content-todo-lists">
                        {todos.map((item, index) => (
                            <li key={index}>
                                <span className="content-val" onClick={() => this.props.changeToDo(index)}>{item.value}</span>
                                <span onClick={() => this.props.deleteToDo(index)} className="delete-todo">X</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content-todo">
                    <div className="content-title">
                        <span>已经完成</span>
                        <span className="content-count">{doneCount}</span>
                    </div>
                    <ul className="content-todo-lists">
                        {dones.map((item, index) => (
                            <li key={index}>
                                <span className="content-val" onClick={() => this.props.changeDone(index)}>{item.value}</span>
                                <span onClick={() => this.props.deleteDone(index)} className="delete-todo">X</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Content