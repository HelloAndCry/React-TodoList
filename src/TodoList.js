import React, {Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css'

class TodoList extends React.Component{
    render(){
        let taskList = this.props.data.map((listItem)=>{
            return(
                <TodoItem
                  deleteTask={this.props.deleteTask}
                  key={listItem.id}
                  taskId={listItem.id}
                  task={listItem.task}
                  complete={listItem.complete}
                  toggleComplete={this.props.toggleComplete}
                />
            )
        })

        return(
            <ul>
                {taskList}
            </ul>
        )
    }
}
export default TodoList;