import React, {Component, Fragment } from 'react';
import TodoTtem from './TodoItem';
import './style.css'

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
    }
    
    toggleComplete(){
        this.props.toggleComplete(this.props.taskId);
    }
    
    deleteTask(){
        this.props.deleteTask(this.props.taskId);
    }
    
    render(){
        let task = this.props.task;
        let itemCheck;
        if(this.props.complete==='true'){
            task = <s>{task}</s>
            itemCheck = true;
        }else{
            itemCheck = false;
        }
        return(
            <li >
                <input type="checkbox" checked={itemCheck} onChange={this.toggleComplete}/>&nbsp;&nbsp;&nbsp;{task}&nbsp;&nbsp;&nbsp;
                &nbsp;<button className="close" ref="deleteBtn" onClick={this.deleteTask}>删除</button>
            </li>
        )
    }
}

export default TodoItem;