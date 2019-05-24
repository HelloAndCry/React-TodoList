import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {"id": "0001", "task":"看书", "complete": "false"},
                {"id": "0002", "task":"逛街", "complete": "false"},
                {"id": "0003", "task":"看电影", "complete": "true"},
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
    }
    
    generateId(){
      return Math.floor(Math.random() * 9000) + 1000;
    }
    
    handleSubmit(task){
        let data = this.state.data;
        let id = this.generateId();
        let complete = "false";
        data = data.concat([{"id": id, "task": task, "complete": "false"}]);
        this.setState({data});
    }
    
    handleToggleComplete(taskId){
        let data = this.state.data;
        for(let i in data){
            if(data[i].id === taskId){
                data[i].complete = data[i].complete=='true'?'false':'true';
                break
            }
        }
        this.setState({data});
    }
    
    handleTaskDelete(taskId){
        let data = this.state.data;
        data = data.filter(task=>
            task.id !== taskId
        )
        this.setState({data})
    }

    render(){
        let statistics = {
            todoCount: this.state.data.length||0,
            todoCompleteCount:this.state.data.filter((item)=>
                item.complete === "true"
            ).length
        }
        return(
            <div>
                <TodoList 
                    deleteTask={this.handleTaskDelete} 
                    toggleComplete={this.handleToggleComplete}
                    data={this.state.data}/>
                <TodoForm submitTask={this.handleSubmit}/>
            </div>
        )
    }
}

render(<TodoBox />, document.getElementById('root'));
