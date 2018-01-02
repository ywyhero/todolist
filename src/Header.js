import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    handleKeyUp(e){
        if(e.keyCode === 13){
            if(e.target.value === ''){
                return false;
            }
            let val = e.target.value
            let todo = {
                value: val,
                done: false
            }
            e.target.value = ''
            this.props.addToDo(todo)
        }
    }
    render () {
        return (
            <div className="header">
                <div className="header-box">
                    <span className="header-title">TODOLIST</span>
                    <input onKeyUp={this.handleKeyUp.bind(this)} className="header-input" placeholder="添加TODO"/> 
                </div>
                   
            </div>
        )
    }
}

export default Header