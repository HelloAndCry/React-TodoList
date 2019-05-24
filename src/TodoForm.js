import React, {Component, Fragment } from 'react';
import './style.css'

class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.submitTask = this.submitTask.bind(this);
    }

    submitTask(e){
        e.preventDefault();
        let task = this.refs.task.value.trim();
        if(!task){
            return;
        }
        this.props.submitTask(task);
        this.refs.task.value="";
    }

    render(){
        return(
            <div>
                <hr/>
                <div>
                    <div>
                        <input type="text" ref="task" placeholder="你想做点什么"/>&nbsp;&nbsp;&nbsp;
                        <input type="submit" onClick={this.submitTask} value="添加" />
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoForm;